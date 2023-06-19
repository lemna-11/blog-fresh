import { apply, tw } from "twind";
import { style } from "../utils/Styling.ts";

export function Introduction(){
    return (
        <div class={tw`flex px-10 py-4 w-full`}>
            <div class={tw`p-4`}>
                <p class={tw`text-2xl`}>Mano Lemmens</p>
                <div class={tw`p-4 ${apply(style)}`}>
                    <h1>Fullstack developer</h1>
                    <h2>Backend</h2>
                    <p>Java(Spring, Spring-boot en hibernate)</p>
                    <p>Rust(actix web)</p>
                    <p>Go(Gin)</p>

                    <h2>Frontend</h2>
                    <p>Fresh(react + tailwind)</p>
                    <p>Nextjs(react + scss)</p>
                    <p>Angular</p>
                </div>
                <div class={tw`p-4 ${apply(style)}`}>
                    <h1>Tech-enthousiasteling</h1>
                    <p>linux</p>
                    <p>Vernieuwende technologieën</p>
                </div>
            </div>
            <div class={tw`grid place-items-center w-4/5`}>
                <img src="https://www.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-600w-387516193.jpg" width={300} height={300}/>
            </div>
        </div>
    )
}