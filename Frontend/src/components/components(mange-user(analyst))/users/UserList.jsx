import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export const UserList = ({ users, selectedUser, onSelectUser }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 h-full">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <User className="w-5 h-5" />
          Users
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {users.map((user, index) => (
            <div
              key={user.id}
              onClick={() => onSelectUser(index)}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-slate-700/50 ${
                selectedUser === index ? 'bg-blue-600/30 border-r-2 border-blue-400' : ''
              }`}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-medium truncate">{user.name}</div>
                <div className="text-slate-400 text-xs">{user.accountId}</div>
              </div>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${
                  user.status === 'active' ? 'bg-green-400' : 
                  user.status === 'flagged' ? 'bg-red-400' : 'bg-yellow-400'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 