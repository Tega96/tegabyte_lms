import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Courses = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Your courses</h1>
                <Link 
                    href="/admin/courses/create"
                    className={buttonVariants()}
                >Create Courses</Link>
            </div>
            <div className="">
                <h1 className=""></h1>
            </div>
        </>
    )
}
export default Courses;