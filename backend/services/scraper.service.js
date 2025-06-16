const puppeteer = require('puppeteer');
const urlLib = require('url');
require('dotenv').config();
const axios = require('axios');


let accessToken = null;

async function getAccessToken() {
  if (accessToken) return accessToken;

  const res = await axios.post('https://api.snov.io/v1/oauth/access_token', null, {
    params: {
      grant_type: 'client_credentials',
      client_id: process.env.SNOV_CLIENT_ID,
      client_secret: process.env.SNOV_CLIENT_SECRET,
    },
  });

  accessToken = res.data.access_token;
  return accessToken;
}

async function findEmailsByDomain(domain) {
  const token = await getAccessToken();

  const startRes = await axios.post(
    'https://api.snov.io/v2/domain-search/domain-emails/start',
    { domain },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const taskHash = startRes.data.meta.task_hash;

  // wait for Snov.io to generate results
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const resultRes = await axios.get(
    `https://api.snov.io/v2/domain-search/domain-emails/result/${taskHash}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const emails = resultRes.data.data.map((item) => item.email);
  return emails;
}

async function findContactInfoByNameAndDomain(firstName, lastName, domain) {
  const token = await getAccessToken();

  const payload = {
    rows: [{ first_name: firstName, last_name: lastName, domain }],
  };

  const startRes = await axios.post(
    'https://api.snov.io/v2/emails-by-domain-by-name/start',
    payload,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const taskHash = startRes.data.data.task_hash;
  await new Promise(resolve => setTimeout(resolve, 3000));

  const resultRes = await axios.get(
    `https://api.snov.io/v2/emails-by-domain-by-name/result/${taskHash}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const enrichedContacts = resultRes.data.data.map(contact => ({
    name: `${contact.first_name} ${contact.last_name}`,
    email: contact.emails?.[0]?.email,
    position: contact.position,
    linkedin: contact.linkedin_url,
    company: contact.domain,
    source: "Snov.io"
  }));

  return enrichedContacts;
}

module.exports = { findEmailsByDomain, findContactInfoByNameAndDomain };

// /**
//  * Search companies using Bing instead of Google to avoid CAPTCHA blocks.
//  * @param {string} keyword - The keyword to search (e.g. "brand content")
//  * @returns {Promise<Array<{ name: string, url: string, logo: string | null }>>}
//  */
// async function searchCompanies(keyword) {
//   const browser = await puppeteer.launch({
//     headless: 'new',
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//       '--disable-blink-features=AutomationControlled'
//     ]
//   });

//   const page = await browser.newPage();
//   await page.setUserAgent(
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
//     '(KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
//   );

//   await page.goto(`https://www.bing.com/search?q=${encodeURIComponent(keyword + ' LLC')}`, {
//     waitUntil: 'domcontentloaded'
//   });

//   await page.waitForSelector('.b_algo h2 a');

//   const companies = await page.evaluate(() => {
//     const anchors = Array.from(document.querySelectorAll('.b_algo h2 a'));
//     return anchors.slice(0, 10).map(a => ({
//       name: a.textContent.trim(),
//       url: a.href,
//       logo: null
//     }));
//   });

//   await browser.close();
//   return companies;
// }

// /**
//  * Extract contact emails and related people from a given URL.
//  * @param {string} url - Company website URL
//  * @returns {Promise<{ emails: string[], people: Array<{ name: string, title: string, email: string }> }>}
//  */
// async function extractContactDetails(url) {
//   const browser = await puppeteer.launch({
//     headless: 'new',
//     args: ['--no-sandbox', '--disable-setuid-sandbox']
//   });

//   const page = await browser.newPage();
//   await page.setUserAgent(
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
//     '(KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
//   );

//   const visitAndExtractEmails = async (page, targetUrl) => {
//     try {
//       await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
//     } catch (error) {
//       return { emails: [], people: [] };
//     }

//     return await page.evaluate(() => {
//       const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;

//       const text = document.body.innerText;
//       const textEmails = text.match(emailRegex) || [];

//       const mailtoEmails = Array.from(document.querySelectorAll('a[href^="mailto:"]'))
//         .map(a => a.getAttribute('href').replace('mailto:', '').trim());

//       const rawEmails = Array.from(new Set([...textEmails, ...mailtoEmails]));
//       const filteredEmails = rawEmails.filter(
//         e => !e.includes('.png') && !e.includes('.jpg') && e.includes('@')
//       );

//       // Ignore generic inboxes like info@, contact@, support@
//       const genericPrefixes = ['info', 'contact', 'support', 'hello', 'sales', 'admin'];
//       const emails = filteredEmails.filter(e => {
//         const prefix = e.split('@')[0].toLowerCase();
//         return !genericPrefixes.includes(prefix);
//       });

//       const people = emails.map(email => {
//         let name = '';
//         let title = '';

//         const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
//         for (const line of lines) {
//           if (line.includes(email)) {
//             if (/CEO|Founder|Manager|Director|Lead|Engineer|President/i.test(line)) {
//               title = line;
//             } else if (/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(line)) {
//               name = line;
//             }
//           }
//         }

//         if (!name) {
//           const guessed = email.split('@')[0].replace(/[\._-]/g, ' ').trim();
//           name = guessed.charAt(0).toUpperCase() + guessed.slice(1);
//         }

//         return {
//           email,
//           name,
//           title: title || 'Unknown'
//         };
//       });

//       return { emails, people };
//     });
//   };

//   let { emails, people } = await visitAndExtractEmails(page, url);

//   if (emails.length === 0) {
//     const baseUrl = new urlLib.URL(url);
//     const fallbackPaths = ['/contact', '/about', '/team'];

//     for (const path of fallbackPaths) {
//       const fullUrl = `${baseUrl.origin}${path}`;
//       const result = await visitAndExtractEmails(page, fullUrl);
//       if (result.emails.length > 0) {
//         emails = result.emails;
//         people = result.people;
//         break;
//       }
//     }
//   }

//   await browser.close();
//   return { emails, people: emails.length > 0 ? people : [] };
// }

// async function findWorkEmail() {
//   const accessToken = 'YOUR_ACCESS_TOKEN'; // Get this via OAuth or manually
//   const payload = {
//     rows: [
//       {
//         first_name: 'John',
//         last_name: 'Doe',
//         domain: 'example.com'
//       }
//     ],
//     webhook_url: 'https://yourdomain.com/webhook' // optional
//   };

//   // Step 1: Start search
//   const { data } = await axios.post(
//     'https://api.snov.io/v2/emails-by-domain-by-name/start',
//     payload,
//     {
//       headers: { Authorization: `Bearer ${accessToken}` }
//     }
//   );

//   const taskHash = data.data.task_hash;

//   // Step 2: Wait and get result
//   setTimeout(async () => {
//     const result = await axios.get(
//       `https://api.snov.io/v2/emails-by-domain-by-name/result?task_hash=${taskHash}`,
//       {
//         headers: { Authorization: `Bearer ${accessToken}` }
//       }
//     );

//     console.log(result.data);
//   }, 5000); // wait 5 seconds before polling
// }

// const GCS_KEY = process.env.GCS_KEY;
// const GCS_CX = process.env.GCS_CX;

// async function searchLinkedInCompanyProfile(query, start = 1) {
//   const params = {
//     q: `site:linkedin.com/company ${query}`,
//     key: GCS_KEY,
//     cx: GCS_CX,
//     gl: 'us',
//     start,
//   };

//   try {
//     const response = await axios.get('https://www.googleapis.com/customsearch/v1', { params });
//     const items = response.data.items || [];

//     return response.data;
//   } catch (err) {
//     console.error('Google Search Error:', err.message);
//     throw new Error('Google Custom Search failed');
//   }
// }

// async function findEmailsByDomain(domain) {
//   const params = {
//     q: `site:${domain} contact OR team OR about OR email`,
//     key: GCS_KEY,
//     cx: GCS_CX,
//     gl: 'us',
//   };

//   try {
//     // Step 1: Search Google for relevant URLs
//     const res = await axios.get('https://www.googleapis.com/customsearch/v1', { params });
//     const links = (res.data.items || []).map(item => item.link);

//     // Step 2: Fetch each page and extract emails
//     const allEmails = new Set();

//     for (const link of links) {
//       try {
//         const { data } = await axios.get(link, {
//           headers: { 'User-Agent': 'Mozilla/5.0' },
//           timeout: 5000,
//         });

//         const matches = data.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
//         if (matches) {
//           matches.forEach(email => allEmails.add(email));
//         }
//       } catch (err) {
//         // Skip failed URLs silently
//         continue;
//       }
//     }

//     return res.data;
//   } catch (err) {
//     console.error('Failed to search or scrape:', err.message);
//     return [];
//   }
// }
// module.exports = {
//   searchCompanies,
//   extractContactDetails,
//   findWorkEmail,
//   searchLinkedInCompanyProfile,
//   findEmailsByDomain
// };
