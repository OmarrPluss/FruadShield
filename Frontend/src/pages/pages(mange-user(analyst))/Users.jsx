import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { UserList } from "@/components/users/UserList";
import { UserDetailsCard } from "@/components/users/UserDetailsCard";
import { AccountDataCard } from "@/components/users/AccountDataCard";
import { LocationInsightsCard } from "@/components/users/LocationInsightsCard";
import { TransactionHistoryCard } from "@/components/users/TransactionHistoryCard";

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(0);

  const users = [
    {
      id: 1,
      name: "John Doe",
      accountId: "ACC-78432",
      avatar: "/lovable-uploads/3628938d-4f70-43e6-b06a-5fa37eb8b02f.png",
      status: "active",
      riskLevel: "low",
      // User Details
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "15/03/1985",
      gender: "Male",
      email: "john.doe@gmail.com",
      phone: "+1 (555) 123-4567",
      jobTitle: "Software Engineer",
      city: "San Francisco",
      // Account Data
      accountData: {
        balance: "$12,450.75",
        creditCard: "**** **** **** 4890",
        loginId: "johndoe_85",
        lastLogin: "Today, 09:42 AM",
        status: "Active"
      },
      // Location Insights
      locationInsights: {
        primaryLocation: "San Francisco, CA",
        mostTransactionsFrom: "San Francisco (75%)"
      },
      // Transactions
      transactions: [
        {
          date: "Today, 10:15 AM",
          amount: "$125.99",
          merchant: "Amazon.com",
          location: "San Francisco, CA",
          status: "approved"
        },
        {
          date: "Yesterday, 7:30 PM",
          amount: "$45.50",
          merchant: "Starbucks",
          location: "San Francisco, CA",
          status: "approved"
        },
        {
          date: "Yesterday, 12:15 PM",
          amount: "$1,250.00",
          merchant: "Electronics World",
          location: "Miami, FL",
          status: "flagged"
        }
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      accountId: "ACC-78433",
      avatar: "/lovable-uploads/3628938d-4f70-43e6-b06a-5fa37eb8b02f.png",
      status: "active",
      riskLevel: "medium",
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: "22/06/1990",
      gender: "Female",
      email: "jane.smith@gmail.com",
      phone: "+1 (555) 987-6543",
      jobTitle: "Product Manager",
      city: "New York",
      accountData: {
        balance: "$8,320.50",
        creditCard: "**** **** **** 5678",
        loginId: "janesmith_90",
        lastLogin: "Today, 10:15 AM",
        status: "Active"
      },
      locationInsights: {
        primaryLocation: "New York, NY",
        mostTransactionsFrom: "New York (85%)"
      },
      transactions: [
        {
          date: "Today, 11:30 AM",
          amount: "$89.99",
          merchant: "Target",
          location: "New York, NY",
          status: "approved"
        },
        {
          date: "Yesterday, 3:45 PM",
          amount: "$250.00",
          merchant: "Apple Store",
          location: "New York, NY",
          status: "approved"
        }
      ]
    },
    {
      id: 3,
      name: "Robert Johnson",
      accountId: "ACC-78434",
      avatar: "/lovable-uploads/3628938d-4f70-43e6-b06a-5fa37eb8b02f.png",
      status: "flagged",
      riskLevel: "high",
      firstName: "Robert",
      lastName: "Johnson",
      dateOfBirth: "10/12/1978",
      gender: "Male",
      email: "robert.johnson@gmail.com",
      phone: "+1 (555) 456-7890",
      jobTitle: "Financial Analyst",
      city: "Chicago",
      accountData: {
        balance: "$5,780.25",
        creditCard: "**** **** **** 9012",
        loginId: "robertj_78",
        lastLogin: "Yesterday, 8:30 PM",
        status: "Flagged"
      },
      locationInsights: {
        primaryLocation: "Chicago, IL",
        mostTransactionsFrom: "Chicago (60%)"
      },
      transactions: [
        {
          date: "Today, 9:15 AM",
          amount: "$2,500.00",
          merchant: "Electronics Store",
          location: "Miami, FL",
          status: "flagged"
        },
        {
          date: "Yesterday, 5:20 PM",
          amount: "$1,200.00",
          merchant: "Jewelry Store",
          location: "Chicago, IL",
          status: "pending"
        }
      ]
    }
  ];

  const currentUser = users[selectedUser];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Users List */}
          <div className="col-span-3">
            <UserList 
              users={users} 
              selectedUser={selectedUser} 
              onSelectUser={setSelectedUser} 
            />
          </div>

          {/* Main Content */}
          <div className="col-span-9 space-y-6">
            {/* User Details & Account Data */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <UserDetailsCard userDetails={{
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                dateOfBirth: currentUser.dateOfBirth,
                gender: currentUser.gender,
                email: currentUser.email,
                phone: currentUser.phone,
                jobTitle: currentUser.jobTitle,
                city: currentUser.city
              }} />
              <AccountDataCard accountData={currentUser.accountData} />
              <LocationInsightsCard locationInsights={currentUser.locationInsights} />
            </div>

            {/* Transaction History */}
            <TransactionHistoryCard transactions={currentUser.transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;