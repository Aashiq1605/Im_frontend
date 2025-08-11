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
  full_name: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone_number: z.string().min(10, "Phone Number is required"),
  username: z.string().min(1, "Username is required"),
  profile_picture: z.any().refine((file) => file?.length > 0, "Profile Picture is required"), // For file input
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  languages_spoken: z.string().min(1, "Languages Spoken is required (comma-separated)"), // Simple text input for now
  category: z.string().min(1, "Category is required"),
  bio: z.string().optional(),
  upi_id: z.string().min(1, "UPI ID is required"),
  pan_number: z.string().min(1, "PAN Number is required"),
  gstin: z.string().optional(),
  address: z.string().min(1, "Address is required"),
})

export default function InfluencerSignupPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      phone_number: "",
      username: "",
      city: "",
      state: "",
      country: "",
      languages_spoken: "",
      category: undefined, // Set to undefined for initial empty state
      bio: "",
      upi_id: "",
      pan_number: "",
      address: "",
    },
  })

  const router = useRouter()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Influencer Signup Data:", values)
    // Handle signup logic here (e.g., API call, file upload)
    router.push("/dashboard/home")
  }

  const categories = [
    "Fashion",
    "Beauty",
    "Gaming",
    "Tech",
    "Travel",
    "Food",
    "Fitness",
    "Lifestyle",
    "Education",
    "Finance",
  ]

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
            <CardTitle className="text-3xl font-bold text-gray-900">Influencer Sign Up</CardTitle>
            <p className="text-gray-600">Create your InfluenceHub account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    placeholder="John Doe"
                    {...form.register("full_name")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.full_name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.full_name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    {...form.register("email")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
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
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone_number">Phone Number</Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    placeholder="+1234567890"
                    {...form.register("phone_number")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.phone_number && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone_number.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="johndoe_influencer"
                    {...form.register("username")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.username && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.username.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="profile_picture">Profile Picture</Label>
                  <Input
                    id="profile_picture"
                    type="file"
                    {...form.register("profile_picture")}
                    className="mt-1 border-gray-300 focus:border-teal-500 file:text-teal-600 file:bg-teal-50 file:border-0 file:rounded-md file:px-3 file:py-1"
                  />
                  {form.formState.errors.profile_picture && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.profile_picture.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="Mumbai"
                    {...form.register("city")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.city && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="Maharashtra"
                    {...form.register("state")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.state && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.state.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    placeholder="India"
                    {...form.register("country")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.country && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.country.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="languages_spoken">Languages Spoken (comma-separated)</Label>
                  <Input
                    id="languages_spoken"
                    placeholder="English, Hindi, Marathi"
                    {...form.register("languages_spoken")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.languages_spoken && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.languages_spoken.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    onValueChange={(value) => form.setValue("category", value)}
                    defaultValue={form.getValues("category")}
                  >
                    <SelectTrigger className="w-full mt-1 border-gray-300 focus:border-teal-500">
                      <SelectValue placeholder="Select your niche" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.category && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.category.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="upi_id">UPI ID</Label>
                  <Input
                    id="upi_id"
                    placeholder="yourname@bank"
                    {...form.register("upi_id")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.upi_id && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.upi_id.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="pan_number">PAN Number</Label>
                  <Input
                    id="pan_number"
                    placeholder="ABCDE1234F"
                    {...form.register("pan_number")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.pan_number && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.pan_number.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="gstin">GSTIN (Optional)</Label>
                  <Input
                    id="gstin"
                    placeholder="XXXXXXXXXXXXXXX"
                    {...form.register("gstin")}
                    className="mt-1 border-gray-300 focus:border-teal-500"
                  />
                  {form.formState.errors.gstin && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.gstin.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself and your content..."
                  {...form.register("bio")}
                  className="mt-1 border-gray-300 focus:border-teal-500 min-h-[80px]"
                />
                {form.formState.errors.bio && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.bio.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  placeholder="123 Main St, Anytown, India"
                  {...form.register("address")}
                  className="mt-1 border-gray-300 focus:border-teal-500 min-h-[80px]"
                />
                {form.formState.errors.address && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white shadow-md"
                >
                  Sign Up
                </Button>
              </motion.div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login/influencer" className="text-teal-600 hover:underline">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
