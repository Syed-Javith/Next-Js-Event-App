import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const MobileNavItems = () => {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <Image
                    src={"/assets/icons/menu.svg"}
                    alt="menu"
                    height={24}
                    width={24}
                    />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MobileNavItems
