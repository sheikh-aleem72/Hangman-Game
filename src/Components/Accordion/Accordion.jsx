import { useState } from "react";
function Accordion({onClickHandler, AccordionText, AccordionContent}){
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (onClickHandler) onClickHandler(); // Call the passed in onClickHandler if it exists
    };
    return (
        <div className="my-3 w-10/12 px-2 py-2 bg-slate-500 text-white rounded-md text-xl">
        <div className="flex justify-between">
            <p className="px-3">{AccordionText}</p>
            <button
                className="px-3 hover:bg-slate-400 rounded-full text-center"
                type="button"
                onClick={handleToggle}
            >
                {isOpen ? '-' : '+'}
            </button>
        </div>
        {isOpen && (
            <p className="text-black px-2 py-3">
                {AccordionContent} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ipsum atque ipsam odit beatae, vero nisi ad optio voluptates non eaque, earum labore nesciunt officia, nemo ut praesentium voluptatibus? Tenetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quisquam eum vel quos officiis, quae reiciendis laboriosam ab maiores sit ipsam earum odio praesentium. Similique ducimus sunt officia aliquam molestias blanditiis deserunt dignissimos quod provident. Possimus excepturi vel ut dolore.
            </p>
        )}
    </div>
    )
}

export default Accordion