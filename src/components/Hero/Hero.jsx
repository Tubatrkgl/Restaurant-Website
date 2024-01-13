import React from "react";
import Vector from "../../assets/vector3.png";
import Food1 from "../../assets/biryani2.png";
import Food2 from "../../assets/biryani3.png";
import Food3 from "../../assets/biryani5.png"


const ImageList = [
    {
        id: 1,
        img: Food1,
    },
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    },
];

const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
}
const Hero = () => {

    const [imageId, setImageId] = React.useState(Food1);

    return (

        <>
            <div style={bgImage}
                className="min-h-[550px]
        sm:min-h-[600px] bg-gray-100
        dark:bg-gray-950 dark:text-white 
        flex justify-center items-center"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        { /* text content section*/}
                        <div className="flex flex-col
                        justify-center gap-4 pt-12 sm:pt-0
                        text-center sm:text-left order-2
sm:order-1">
                            <h1 className="text-5xl
                            sm:text-6xl lg:text-7xl font-bold
                            ">Welcome to the Foodie Zone</h1>
                            <p className="text-sm">Lorem ipsum dolor
                                sit amet consectetur,
                                adipisicing elit. Molestiae,
                                inventore similique. Esse,
                                ea necessitatibus velit
                                maxime beatae est error
                                vitae!</p>
                            <div>
                                <button className="bg-gradient-to-r
                                    from-primary to-secondary text-white
                                    px-4 py-2 rounded-full hover:scale-105
                                    duration-200">Order Now</button>
                            </div>
                        </div>

                        {/*Image section*/}
                        <div></div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Hero