export default function DecorativeLines() {
    return (
        <div className="max-md:hidden block">
            {["15%", "30%", "45%", "60%", "75%", "90%"].map((left) => (
                <div
                    key={left}
                    style={{ left }}
                    className="absolute top-0 -translate-x-1/2 -translate-y-1 flex flex-col"
                >
                    <div
                        className="w-px h-screen"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(187,187,187,0) 0%, rgba(187,187,187,0.12) 12%, rgba(187,187,187,0.12) 88%, rgba(187,187,187,0) 100%)",
                        }}
                    />
                </div>
            ))}
        </div>
    );
}