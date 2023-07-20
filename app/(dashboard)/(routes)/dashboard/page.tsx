import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
  return (
    <div className="flex">
    <p>dashboard page... (Protected)</p>
    <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default DashboardPage

