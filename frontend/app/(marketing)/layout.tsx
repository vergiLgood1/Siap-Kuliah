import { NavbarMenu } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;  
}) => {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <NavbarMenu/>
            <main className="h-full ">
             {children}
            </main>
        </div>
     );
}
 
export default MarketingLayout;