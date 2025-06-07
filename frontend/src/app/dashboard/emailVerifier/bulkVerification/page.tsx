import { useState } from 'react';

const screens = {
  main: 'main',
  domainSearch: 'domainSearch',
  domainSearchNew: 'domainSearchNew',
  domainSearchResult: 'domainSearchResult',
  emailFinder: 'emailFinder',
  emailFinderNew: 'emailFinderNew',
  emailVerifier: 'emailVerifier',
  emailVerifierNew: 'emailVerifierNew'
};

export default function BulkVerificationPage() {
  const [screen, setScreen] = useState(screens.main);

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-white min-h-screen">
        {screen === screens.main && (
          <div>
            <h1 className="text-black text-xl font-semibold mb-4">Bulk Email Verification</h1>
            <p className="text-gray-600 mb-6">Choose what task to do.</p>
            <ul className="space-y-2">
              <li className="border rounded-lg p-4 cursor-pointer hover:bg-gray-100" onClick={() => setScreen(screens.domainSearch)}>
                <strong>Domain Search</strong>
                <p className="text-sm text-gray-500">Find email addresses from a list of names and companies</p>
              </li>
              <li className="border rounded-lg p-4 cursor-pointer hover:bg-gray-100" onClick={() => setScreen(screens.emailFinder)}>
                <strong>Email Finder</strong>
                <p className="text-sm text-gray-500">Find email addresses from a list of names and companies</p>
              </li>
              <li className="border rounded-lg p-4 cursor-pointer hover:bg-gray-100" onClick={() => setScreen(screens.emailVerifier)}>
                <strong>Email Verifier</strong>
                <p className="text-sm text-gray-500">Verify a list of email addresses</p>
              </li>
            </ul>
          </div>
        )}

        {screen === screens.domainSearch && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Bulks / Domain Search</h2>
            <button onClick={() => setScreen(screens.domainSearchNew)} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">New Lead</button>
            <div className="cursor-pointer hover:underline mb-2" onClick={() => setScreen(screens.domainSearchResult)}>Company email 1 (Status: Downloaded)</div>
            <div className="text-gray-500">New Lead (Status: Pending)</div>
          </div>
        )}

        {screen === screens.domainSearchNew && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Bulks / Domain Search / New</h2>
            <p className="mb-2">List name: <input type="text" className="border rounded px-2 py-1" placeholder="New list" /></p>
            <p className="font-semibold mt-4 mb-2">1. Enter your list of domains or company names</p>
            <textarea className="border rounded w-full p-2" rows={4} placeholder="Enter domain names, one per line" defaultValue={`Strataleadership.com\nTechcorps.com`} />
            <p className="font-semibold mt-4 mb-2">2. Set filters and options</p>
            <label className="block"><input type="checkbox" checked readOnly /> Verify the email addresses?</label>
            <label className="block"><input type="checkbox" checked readOnly /> Include the sources in the result</label>
            <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded">Upload</button>
          </div>
        )}

        {screen === screens.domainSearchResult && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Bulks / Domain Search / Company email 1</h2>
            <p className="mb-4">2 domain names + 10 email addresses found</p>
            <div className="border rounded p-4 bg-gray-50">
              <p className="mb-2 font-semibold">Preview:</p>
              <ul className="list-disc ml-6 text-sm">
                <li>strataleadership.com - 98% confidence - Personal</li>
                <li>techcorps.com - 87% confidence - Personal</li>
              </ul>
            </div>
          </div>
        )}

        {screen === screens.emailFinder && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Bulks / Email Finder</h2>
            <button onClick={() => setScreen(screens.emailFinderNew)} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">New Lead</button>
            <p>Email Finder bulk list</p>
          </div>
        )}

        {screen === screens.emailFinderNew && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Bulks / Email Finder / New</h2>
            <p className="mb-2">List name: <input type="text" className="border rounded px-2 py-1" placeholder="Email Finder 1" /></p>
            <p className="mb-2">Upload your file:</p>
            <input type="file" className="mb-4" />
            <label className="block"><input type="checkbox" checked readOnly /> Include sources for the emails</label>
            <label className="block"><input type="checkbox" checked readOnly /> Skip rows that already have email addresses</label>
            <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded">Upload</button>
          </div>
        )}

        {screen === screens.emailVerifier && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Bulks / Email Verifier</h2>
            <button onClick={() => setScreen(screens.emailVerifierNew)} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">New Lead</button>
            <p>Email Verifier bulk list</p>
          </div>
        )}

        {screen === screens.emailVerifierNew && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Bulks / Email Verifier / New</h2>
            <p className="mb-2">List name: <input type="text" className="border rounded px-2 py-1" placeholder="New list" /></p>
            <p className="font-semibold mt-4 mb-2">Enter your list of email addresses</p>
            <textarea className="border rounded w-full p-2" rows={4} placeholder="e.g. user@domain.com, domain2.com" defaultValue={`Strataleadership.com\nTechcorps.com`} />
            <label className="block mt-2"><input type="checkbox" checked readOnly /> Include the sources for the result</label>
            <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded">Upload</button>
          </div>
        )}
      </div>
    </div>
  );
}
