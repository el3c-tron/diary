"use client"

import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton } from '@clerk/clerk-react'

const Heading = () => {

    const {isAuthenticated, isLoading } = useConvexAuth()

    return (
        <div className="max-w-3xl space-y-5">
            <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold">
                Your Ideas, Notes, & Plans. Unified. Welcome to <span className="underline">Diary</span>
            </h1>
            <h3 className="text-base sm:text-1xl md:text-1xl font-medium">
                Diary is the connected workspace where better, faster work happens.
            </h3>
            {
                isLoading && (
                    <div className="w-full flex items-center justify-center">
                        <Spinner size='lg' />
                    </div>
                )
            }
            {
                isAuthenticated && !isLoading && (
                    <Button asChild>
                        <Link href='/documents'>
                            Enter Diary
                            <ArrowRight className="h-4 w-4 ml-2"/>
                        </Link>
                    </Button>
                )
            }
            {
                !isAuthenticated && !isLoading && (
                    <SignInButton mode="modal">
                        <Button>
                            Get Diary free
                            <ArrowRight className="h-4 w-4 ml-2"/>
                        </Button>
                    </SignInButton>
                )
            }
            

        </div>
    );
}
 
export default Heading;