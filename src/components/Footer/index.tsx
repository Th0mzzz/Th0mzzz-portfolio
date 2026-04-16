import DecorativeCircles from "../DecorativeCircles";

export default function Footer() {
    return (
        <>
            <footer className="relative h-20 pt-30 pb-8">
                <p className="text text-center">Copyright &copy; {new Date().getFullYear()} Thomaz Vasconcelos Mendes. All rights reserved.</p>
                <div className="absolute bottom-[-550px] left-1/2 transform -translate-x-1/2 -z-1">
                    <DecorativeCircles position="bottom-center" multip={1.1} />
                </div>
            </footer>
        </>
    )
}