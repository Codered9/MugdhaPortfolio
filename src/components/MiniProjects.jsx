import Eyes from "./Eyes"

function MiniProject () {
    return (
        <>
            <div className="bg-cus-white">
                <div className="mx-auto w-[1px] bg-cus-black h-44"></div>
                <p className="text-6xl text-cus-orange text-center font-syne font-medium my-16">Mini Projects</p>
                <div className="grid grid-cols-2 mx-auto gap-16 max-w-7xl justify-center">
                    <img src='/src/assets/images/miniProject.png' className="w-full" />
                    <img src='./src/assets/images/miniProject.png' className="w-full" />
                </div>
                <div className="mx-auto my-12 w-[1px] bg-cus-black h-44 "></div>
                <p className="text-5xl/16 font-syne font-semibold max-w-7xl mx-auto pb-40">
            Away from pixels and user flows, you’ll probably find me planning my next trip before the current one even ends, lacing up my running shoes to clear my head, or diving into something wonderfully random—shaping tiny clay figurines, playing a new board or card game, or exploring whatever new fascination catches my eye.
            </p>
            </div>
        </>
    )
}

export default MiniProject