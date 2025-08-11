"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  company_name: z.string().min(1, "Company Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  mobile_number: z.string().min(10, "Mobile Number is required"),
  business_type: z.enum(["Brand", "Agency"], { message: "Business Type is required" }),
  logo: z.any().refine((file) => file?.length > 0, "Logo is required"), // For file input
  contact_person_name: z.string().min(1, "Contact Person Name is required"),
  designation: z.string().min(1, "Designation is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  gstin: z.string().min(1, "GSTIN is required"),
  pan_number: z.string().min(1, "PAN Number is required"),
  billing_address: z.string().min(1, "Billing Address is required"),
})

export default function BrandSignupPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      email: "",
      password: "",
      mobile_number: "",
      business_type: undefined, // Set to undefined for initial empty state
      contact_person_name: "",
      designation: "",
      city: "",
      state: "",
      country: "",
      gstin: "",
      pan_number: "",
      billing_address: "",
    },
  })

  const router = useRouter()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Brand/Agency Signup Data:", values)
    router.push("/dashboard/home")
    // Handle signup logic here (e.g., API call, file upload)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">Brand/Agency Sign Up</CardTitle>
            <p className="text-gray-600">Create your InfluenceHub account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company_name">Company Name</Label>
                  <Input
                    id="company_name"
                    placeholder="Acme Corp"
                    {...form.register("company_name")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.company_name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.company_name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@acmecorp.com"
                    {...form.register("email")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...form.register("password")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="mobile_number">Mobile Number</Label>
                  <Input
                    id="mobile_number"
                    type="tel"
                    placeholder="+1234567890"
                    {...form.register("mobile_number")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.mobile_number && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.mobile_number.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="business_type">Business Type</Label>
                  <Select
                    onValueChange={(value) => form.setValue("business_type", value as "Brand" | "Agency")}
                    defaultValue={form.getValues("business_type")}
                  >
                    <SelectTrigger className="w-full mt-1 border-gray-300 focus:border-purple-500">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Brand">Brand</SelectItem>
                      <SelectItem value="Agency">Agency</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.business_type && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.business_type.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="logo">Company Logo</Label>
                  <Input
                    id="logo"
                    type="file"
                    {...form.register("logo")}
                    className="mt-1 border-gray-300 focus:border-purple-500 file:text-purple-600 file:bg-purple-50 file:border-0 file:rounded-md file:px-3 file:py-1"
                  />
                  {form.formState.errors.logo && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.logo.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="contact_person_name">Contact Person Name</Label>
                  <Input
                    id="contact_person_name"
                    placeholder="Jane Doe"
                    {...form.register("contact_person_name")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.contact_person_name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.contact_person_name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    placeholder="Marketing Manager"
                    {...form.register("designation")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.designation && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.designation.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    {...form.register("city")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.city && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="NY"
                    {...form.register("state")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.state && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.state.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    placeholder="USA"
                    {...form.register("country")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.country && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.country.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="gstin">GSTIN</Label>
                  <Input
                    id="gstin"
                    placeholder="XXXXXXXXXXXXXXX"
                    {...form.register("gstin")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.gstin && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.gstin.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="pan_number">PAN Number</Label>
                  <Input
                    id="pan_number"
                    placeholder="ABCDE1234F"
                    {...form.register("pan_number")}
                    className="mt-1 border-gray-300 focus:border-purple-500"
                  />
                  {form.formState.errors.pan_number && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.pan_number.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="billing_address">Billing Address</Label>
                <Textarea
                  id="billing_address"
                  placeholder="123 Main St, Anytown, USA"
                  {...form.register("billing_address")}
                  className="mt-1 border-gray-300 focus:border-purple-500 min-h-[80px]"
                />
                {form.formState.errors.billing_address && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.billing_address.message}</p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-md"
                >
                  Sign Up
                </Button>
              </motion.div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login/brand" className="text-purple-600 hover:underline">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
