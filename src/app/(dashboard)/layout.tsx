import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
            {/* Left */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white p-4">
              <Link href="/" className="flex items-center justify-center lg:justify-start gap-2"> 
                <Image src="/logo.png" width={32} height={32} alt={""} />
                <span className="hidden lg:block ">SchoolLama</span>
              </Link>
              <Menu/>
            </div>
            {/* Right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
              <Navbar />
              {children}
            </div>
        </div>
    );
  }