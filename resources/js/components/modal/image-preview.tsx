import { Camera } from "lucide-react"

const ImagePreview = ({ imageURL, ...props }: { imageURL: string }) => {
    return (
        <>
            {
                imageURL ? (
                    <img className={"object-cover " + props.className} src={imageURL} {...props} />
                ) : (
                    <div className={"flex justify-center items-center p-2 bg-gray-600 " + props.className}>
                        <Camera className="w-5 h-5" />
                    </div>
                )
            }

        </>
    )
}

export default ImagePreview
