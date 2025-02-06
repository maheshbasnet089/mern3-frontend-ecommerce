import Sidebar from "./components/Sidebar/Sidebar"




function AdminLayout({children}:Readonly<{children : React.ReactNode}>){
    return ( 
<div className="flex h-screen bg-gray-100">
  {/* sidebar */}
  <div className="hidden md:flex flex-col w-64 bg-gray-800">
    <div className="flex items-center justify-center h-16 bg-gray-900">
      <span className="text-white font-bold uppercase">Digital Dokaan Dashboard</span>
    </div>
 <Sidebar />
  </div>
  {/* Main content */}
  <div className="flex flex-col flex-1 overflow-y-auto">
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
      <div className="flex items-center px-4">
       
      </div>

    </div>
    <div className="p-4">
    {children}
    </div>
  </div>
</div>

    )
}

export default AdminLayout