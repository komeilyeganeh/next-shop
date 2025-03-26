export default function NotFoundPage() {
    return <div className="h-screen fixed w-full bg-cyan-700 flex items-center justify-center">
        <div className="flex flex-col gap-8 items-center">
            <h2 className="text-9xl text-white font-bold">404</h2>
            <p className="text-3xl italic text-amber-200">Not Found !</p>
        </div>
    </div>
}