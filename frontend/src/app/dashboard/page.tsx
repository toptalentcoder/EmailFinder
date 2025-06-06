"use client";

import { useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import DashboardMenu from "./dashboardMenu/page";
import LeadScraperPage from "./leadScraper/page";
import PeoplePage from "./discover/people/page";
import CompaniesPage from "./discover/companies/page";
import EmailFinderPage from "./emailFinder/page";
import BulkVerificationPage from "./emailVerifier/bulkVerification/page";
import SingleVerificationPage from "./emailVerifier/singleVerification/page";
import UpdatesPage from "./updates/page";
import LeadsCompaniesPage from "./leads/companies/page";
import AllpeoplePage from "./leads/people/allPeople/page";
import ImportFromCompaniesPage from "./leads/people/importFromCompanies/page";
import JosiesLeadsPage from "./leads/people/josiesLeads/page";
import CampaignsPage from "./campaigns/campaigns/page";
import EngagementPage from "./campaigns/engagement/page";
import InboxPage from "./campaigns/inbox/page";
import QueuePage from "./campaigns/queue/page";
import ReportingPage from "./campaigns/reporting/page";
import CampaginSettingsPage from "./campaigns/settings/page";
import TemplatesPage from "./campaigns/templates/page";
import UnsubscriptionsPage from "./campaigns/unsubscriptions/page";
import IntegrationPage from "./integration/page";
import APIPage from "./api/page";

export default function Dashboard(){

    const [selectedMenu, setSelectedMenu] = useState("Dashboard");
    const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null);

    const [collapsed, setCollapsed] = useState(false); 
    const [activePanel, setActivePanel] = useState<string | null>(null);

    return(
        <div className="flex">
            <Sidebar
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
                selectedSubmenu={selectedSubmenu}
                setSelectedSubmenu={setSelectedSubmenu}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                activePanel={activePanel}
                setActivePanel={setActivePanel}
            />

            <div className="flex-1 bg-white">

                {/* Pages for floating submenus */}
                {selectedSubmenu === "People" && (
                    <PeoplePage
                        togglePanel={() =>
                        setActivePanel(activePanel ? null : selectedMenu) // 💡 toggle only panel
                        }
                    />
                )}

                {selectedSubmenu === "Companies" && (
                    <CompaniesPage
                        togglePanel={() =>
                        setActivePanel(activePanel ? null : selectedMenu) // 💡 toggle only panel
                        }
                    />
                )}

                {selectedSubmenu === "LeadsCompanies" && <LeadsCompaniesPage/>}
                {selectedSubmenu === "All People" && <AllpeoplePage/>}
                {selectedSubmenu === "Import from Companies" && <ImportFromCompaniesPage/>}
                {selectedSubmenu === "Josie’s Leads" && <JosiesLeadsPage/>}
                {selectedSubmenu === "Single Verification" && (
                    <SingleVerificationPage
                        togglePanel={() =>
                        setActivePanel(activePanel ? null : selectedMenu) // 💡 toggle only panel
                        }
                    />
                )}
                {selectedSubmenu === "Bulk Verification" && <BulkVerificationPage/>}
                {selectedSubmenu === "Campaigns" && <CampaignsPage/>}
                {selectedSubmenu === "Inbox" && <InboxPage/>}
                {selectedSubmenu === "Engagement" && <EngagementPage/>}
                {selectedSubmenu === "Reporting" && <ReportingPage/>}
                {selectedSubmenu === "Queue" && <QueuePage/>}
                {selectedSubmenu === "CampaignSettings" && <CampaginSettingsPage/>}
                {selectedSubmenu === "Templates" && <TemplatesPage/>}
                {selectedSubmenu === "Unsubscriptions" && <UnsubscriptionsPage/>}

                {/* Pages for main menu */}
                {selectedMenu === "Dashboard" && <DashboardMenu collapsed={collapsed} setCollapsed={setCollapsed} />}
                {selectedMenu === "Lead Scraper" && <LeadScraperPage collapsed={collapsed} setCollapsed={setCollapsed} />}
                {selectedMenu === "Email Finder" && <EmailFinderPage collapsed={collapsed} setCollapsed={setCollapsed}/>}
                {selectedMenu === "Updates" && <UpdatesPage/>}
                {selectedMenu === "Integration" && <IntegrationPage/>}
                {selectedMenu === "API" && <APIPage/>}

            </div>

        </div>
    )
}