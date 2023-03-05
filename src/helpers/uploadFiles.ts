import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async(pathFile: string, folderDestiny : string) => {
    const { secure_url } = await cloudinary.uploader.upload(pathFile, {
        folder: folderDestiny
    });

    return secure_url;
}

