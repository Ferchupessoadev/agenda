import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center md:items-start justify-center gap-2 md:p-10">
            <div className="w-full md:w-1/2 flex flex-col gap-6 pr-10">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <Link href={route('home')} className="flex flex-col items-center font-medium">
                            <div className="mb-1 flex size-max items-center justify-center rounded-md">
                                <AppLogoIcon className="size-20" />
                            </div>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium">{title}</h1>
                            <p className="text-muted-foreground text-center text-sm">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <img
                className='fixed top-0 right-0 object-cover h-full w-[50%] hidden md:block'
                src="/banner-auth.jpg" alt=""
            />
        </div>
    );
}
