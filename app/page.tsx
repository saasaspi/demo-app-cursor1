import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, Filter, Plus, Search } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Superladder</h1>
        </div>
        <nav className="mt-4">
          {["Dashboard", "Job Tracker", "Resume Builder", "Contacts", "Documents", "LinkedIn", "Community", "Find Recruiters"].map((item) => (
            <a key={item} href="#" className="block px-4 py-2 text-blue-100 hover:bg-blue-600 transition duration-150">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-blue-100 p-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-50">
              AI Tools <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Upgrade to Premium</Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6 bg-blue-50">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">All Resumes</h2>
          
          {/* Search and filter */}
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <Input placeholder="Search" className="w-64 border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
              <Button variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-100">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-100">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" /> Create New Resume
              </Button>
            </div>
          </div>

          {/* Modified middle panel with 2 inputs and 1 output */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-blue-200">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Resume Generator</h3>
            <div className="space-y-4">
              <Input placeholder="Enter job title" className="border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
              <Input placeholder="Enter years of experience" className="border-blue-200 focus:border-blue-500 focus:ring-blue-500" />
              <div className="p-4 bg-blue-50 rounded-md border border-blue-200">
                <p className="font-medium text-blue-800">Generated Resume Summary:</p>
                <p className="text-sm text-blue-600 mt-2">Your generated resume summary will appear here...</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md border border-blue-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead className="text-blue-900">Resume Title</TableHead>
                  <TableHead className="text-blue-900">Score</TableHead>
                  <TableHead className="text-blue-900">Created</TableHead>
                  <TableHead className="text-blue-900">Modified</TableHead>
                  <TableHead className="text-blue-900">Job Title</TableHead>
                  <TableHead className="text-blue-900">Company Name</TableHead>
                  <TableHead className="text-blue-900">Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-medium">Account Executive</TableCell>
                  <TableCell>
                    <div className="w-16 h-2 bg-blue-100 rounded">
                      <div className="w-12 h-2 bg-blue-500 rounded"></div>
                    </div>
                  </TableCell>
                  <TableCell>Aug 31, 2024</TableCell>
                  <TableCell>Aug 31, 2024</TableCell>
                  <TableCell>Account Executive</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Resume</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}