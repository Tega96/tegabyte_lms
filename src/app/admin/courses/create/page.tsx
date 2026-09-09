"use client"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Controller, Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { courseSchema } from "@/lib/zodSchema";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";


const CourseCreationPage = () => {
    const form = useForm<z.infer<typeof courseSchema>>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
        title: "",
        description: "",
        fileKey: "",
        price: 0,
        duration: 0,
        level: "",
        category: "",
        smallDescription: "",
        slug: "",
        status: "",
        },
    })

    function handleSubmit(data: z.infer<typeof courseSchema>) {
        // Do something with the form values.
        console.log(data)
    }
 
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Link 
                    href="/admin/courses" 
                    className={buttonVariants({
                        variant: "outline",
                        size: "icon"
                    })}>
                    <ArrowLeft className="size-4" />
                </Link>
                <h1 className="text-2xl font-bold">Create Course</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>
                        Provide basic information about the course
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form 
                            className="space-y-6" 
                            // onSubmit={form.handleSubmit}
                        >
                            <FieldGroup></FieldGroup>
                            <Controller
                                control={form.control}
                                name='title'
                                render={({ field, fieldState }) => (
                                    <Field>
                                        <FieldLabel htmlFor="">Title</FieldLabel>
                                        <Input 
                                            {...field} 
                                            id="for"
                                            placeholder="Title"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
export default CourseCreationPage