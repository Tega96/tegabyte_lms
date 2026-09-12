import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon, Loader2, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";

export function RenderEmptyState ({isDragActive}: {isDragActive: Boolean}) {
    return (
        <div className="text-center">
            <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted mb-4">
                <CloudUploadIcon className={cn(
                        "size-6 text-muted-foreground",
                        isDragActive && "text-primary"
                )} />
            </div>
            <p className="text-base font-semibold text-foreground">Drop your files here or <span className="text-primary font-bold cursor-pointer">click to upload</span></p>
            <Button className="mt-4" type="button">Select File</Button>
        </div>
    )
}

export function RenderUploadedState({
    previewUrl,
    isDeleting,
    handleRemoveFile,
}: {
    previewUrl: string;
    isDeleting: boolean;
    handleRemoveFile: () => void
}) {
    return (
        <div className="">
            <Image
                src={previewUrl}
                alt="Uploaded File"
                fill
                className="object-contain p-2"
            />
            <Button
                variant="destructive"
                size="icon"
                className={cn("absolute top-4 right-4")}
                onClick={handleRemoveFile}
                disabled={isDeleting}
            >
                {isDeleting ? (
                    <Loader2 className="size-4 animate-spin" />
                ): (
                    <XIcon className="size-4" />
                )}
            </Button>
        </div>
    )
}

export function RenderErrorState() {
    return (
        <div className="text-muted-foreground text-center">
            <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-destructive/30 mb-4">
                <ImageIcon className={cn(
                    "size-6 text-destructive",
                )} />
            </div>

            <p className="text-base font-semibold">Upload Failed</p>
            <p className="text-xs mt-1">Something went wrong</p>
            <Button variant="outline" type="submit" className="mt-4">
                Retry File selection
            </Button>
        </div>
    )
}

// export function RenderUploadedState({ previewUrl }: { previewUrl: string }) {
//     return (
//         <div>
//             <Image
//                 src={previewUrl}
//                 alt="Uploaded File"
//                 fill
//                 className="object-contain p-2"
//             />
//             <Button 
//                 variant="destructive" 
//                 size='icon' 
//                 className={cn("absolute top-4 right-4")}
//             >
//                 <XIcon className="size-4" />
//             </Button>
//         </div>
//     )
// }

export function RenderUploadingState({progress, file}: {progress: number, file: File}) {
    return (
        <div className="text-center flex justify-center items-center flex-col">
            <p>{progress}</p>
            <p className="mt-2 text-sm font-medium text-foreground">Uploading...</p>
            <p className="mt-1 text-xs text-muted-foreground-muted truncate max-w-xs">
                {file.name}
            </p>
        </div>
    )
}