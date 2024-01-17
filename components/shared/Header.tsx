import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";

export default function Header() {
    return (
        <header className="w-full border-b py-2 bg-slate-400 flex flex-row">
            <div className="p-2">
                <Image
                    src={"/assets/images/logo.svg"}
                    alt="Logo"
                    width={128} height={38}
                />
            </div>
            <SignedIn>
                <div className="md:flex-between hidden w-full max-w-xs">
                    <nav>
                        <NavItems />
                    </nav>
                </div>
            </SignedIn>
            <div className="flex w-32 justify-end gap-4 items-end">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <MobileNavItems/>
                </SignedIn>
                <SignedOut>
                    <Button>
                        <Link href={"/sign-in"}>
                            Login In
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </header>
    );
}