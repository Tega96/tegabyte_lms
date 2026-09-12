"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, PlusIcon, SparkleIcon } from "lucide-react"
import Link from "next/link"
import { Controller, Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { courseCategories, courseLevels, courseSchema, courseStatus } from "@/lib/zodSchema";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import slugify from 'slugify';
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RichTextEditor } from "@/components/rich-text-editor/Editor"
import Uploader from "@/components/file-upload/Uploader"



const CourseCreationPage = () => {
    const form = useForm<z.infer<typeof courseSchema>>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
        title: "",
        description: "",
        fileKey: "",
        price: 0,
        duration: 0,
        level: "Beginner",
        category: "Health $ Fitness",
        status: "Draft",
        smallDescription: "",
        slug: "",
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
                            <FieldGroup className="flex gap-4">
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
                            </FieldGroup>

                            <FieldGroup className="flex flex-row items-end">
                                <Controller
                                    control={form.control}
                                    name='slug'
                                    render={({ field, fieldState }) => (
                                        <Field className="w-full">
                                            <FieldLabel htmlFor="">Slug</FieldLabel>
                                            <Input 
                                                {...field} 
                                                id="for"
                                                placeholder="Slug"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Button type="button" className="w-fit" onClick={() => {
                                    const titleValue = form.getValues("title") // To get form title value

                                    // use slugify package to create slug automatically
                                    const slug = slugify(titleValue);

                                    form.setValue('slug', slug, { shouldValidate: true });
                                }}> 
                                    Generate Slug <SparkleIcon className="ml-1" size="16" />
                                </Button>
                            </FieldGroup>
                            <Controller
                                control={form.control}
                                name='smallDescription'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel htmlFor="">Small description</FieldLabel>
                                        <Textarea 
                                            {...field} 
                                            placeholder="Small description"
                                            className="min-h-[120px]"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                control={form.control}
                                name='description'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel > Description</FieldLabel>
                                        <RichTextEditor field={field} />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                control={form.control}
                                name='fileKey'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel > Thumbnail image</FieldLabel>
                                        <Uploader onChange={field.onChange} value={field.value} />

                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Controller
                                control={form.control}
                                name='category'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel > Category</FieldLabel>
                                        <Select 
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className='w-full'>
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {courseCategories.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}                                        
                                    </Field>
                                )}
                            />
                                <Controller
                                control={form.control}
                                name='level'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel > Level</FieldLabel>
                                        <Select 
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className='w-full'>
                                                <SelectValue placeholder="Select Level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {courseLevels.map((level) => (
                                                    <SelectItem key={level} value={level}>
                                                        {level}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}                                    
                                    </Field>
                                )}
                            />

                            <Controller
                                control={form.control}
                                name='duration'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel > Duration (hours)</FieldLabel>
                                        <Input 
                                            {...field} 
                                            placeholder="Duration"
                                            type="number"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                control={form.control}
                                name='price'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel > Price ($)</FieldLabel>
                                        <Input 
                                            {...field} 
                                            placeholder="Price"
                                            type="number"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            </FieldGroup> 
                            <Controller
                                control={form.control}
                                name='status'
                                render={({ field, fieldState }) => (
                                    <Field className="w-full">
                                        <FieldLabel > Status </FieldLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Status"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {courseStatus.map((status) => (
                                                  <SelectItem key={status} value={status}>
                                                    {status}
                                                  </SelectItem> 
                                                ))}
                                            </SelectContent>
                                            
                                        </Select>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Button>
                                Create Course 
                                <PlusIcon className="ml-1" size={16} />
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
export default CourseCreationPage