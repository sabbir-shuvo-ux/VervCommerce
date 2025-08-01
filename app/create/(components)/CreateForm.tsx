"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CreateProductSchema,
  CreateProductSchemaType,
} from "@/schema/CreateSchema";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const CreateForm = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      category: "",
      imageUrl: "",
    },
  });

  async function onSubmit(values: CreateProductSchemaType) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Product created successfully!");

    console.log(values);

    if (!checked) {
      router.push("/");
    }
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
    }
  }, [form.formState, form]);

  const categories = ["Electronics", "Clothing", "Books"];

  return (
    <section className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 w-full justify-end px-6">
          <span>Stay in this page after creating product</span>
          <Switch
            className=""
            checked={checked}
            onCheckedChange={(checked) => setChecked(checked)}
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white rounded-xl shadow-md p-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block font-medium text-base">
                    Product Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none h-[45px] placeholder:text-base"
                      placeholder="Enter product name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block font-medium text-base">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-base"
                      placeholder="Enter product description"
                      rows={5}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 items-center w-full max-sm:flex-col">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="block font-medium text-base">
                      Price
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none h-[45px] placeholder:text-base"
                        type="number"
                        placeholder="Enter product price"
                        {...field}
                        value={field.value as number}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="block font-medium text-base">
                      Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none !h-[45px] placeholder:text-base">
                          <SelectValue placeholder="Select a product category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block font-medium text-base">
                    Image URL
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none h-[45px] placeholder:text-base"
                      placeholder="Enter product image URL"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="cursor-pointer h-[45px] text-base"
              variant={"default"}
              size={"lg"}
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CreateForm;
