import { Head } from '@inertiajs/react';

export default function Welcome() {

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className='min-h-screen flex flex-col gap-5 items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img className='w-24' src="/favicon.ico" alt="Logo" />
                    <h1 className='text-lg'>Bienvenidos al sistema de gestion de reparaciones de computadoras de la E.E.T N°2</h1>
                </div>
                <div className='flex gap-4'>
                    <a href={route('login')} className='bg-blue-800 text-white px-4 py-1 rounded'>Iniciar sesión</a>
                    <a href={route('register')} className='bg-blue-800 text-white px-4 py-1 rounded'>Registrarse</a>
                </div>
            </div>
        </>
    );
}
