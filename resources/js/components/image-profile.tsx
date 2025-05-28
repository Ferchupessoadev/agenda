const ImageProfile = ({ src, className, ...props }: { src: string, className?: string }) => {
    return (
        <>
            {
                src == 'default-user.jpg'
                    ? <img className={"object-cover " + className} src={src} {...props} />
                    : <img className={"object-cover " + className} src={'/storage/' + src} {...props} />
            }
        </>
    )
}

export default ImageProfile
