import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// 1. Schema με Zod
const schema = z.object({
  username: z.string().min(3, "Το όνομα πρέπει να έχει τουλάχιστον 3 χαρακτήρες"),
  email: z.string().email("Μη έγκυρο email"),
  password: z.string().min(6, "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες"),
});

// 2. Type από το schema
type FormData = z.infer<typeof schema>;

const Contact =()=> {
  // 3. React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // State για success μήνυμα
  const [success, setSuccess] = useState(false);

  // 4. onSubmit
  const onSubmit = (data: FormData) => {
    console.log("Υποβλήθηκαν:", data);

    setSuccess(true); // δείχνει success μήνυμα
    reset(); // καθαρίζει τη φόρμα

    // εξαφανίζουμε το μήνυμα μετά από 3 δευτερόλεπτα
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-700 p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Εγγραφή</h2>

        {/* Username */}
        <div className="mb-3">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            {...register("username")}
            className="w-full p-2 border rounded"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>

        {/* Success μήνυμα */}
        {success && (
          <p className="text-green-600 text-center mt-3">
            ✅ Επιτυχής υποβολή!
          </p>
        )}
      </form>
    </div>
  );
}

 export default Contact; 