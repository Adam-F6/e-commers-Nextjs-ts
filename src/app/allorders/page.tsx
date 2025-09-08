'use client'

import { CheckCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function OrderConfirmationPage() {
  return (
    <main className={cn("min-h-screen bg-gray-100 flex items-center justify-center p-4")}>
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Thank you for your purchase!</h1>
        <p className="text-gray-600">
          Your order has been confirmed and is now on its way. You’ll receive a notification when it’s out for delivery.
        </p>
        <div className="flex justify-center">
          <Truck className="text-blue-500 w-12 h-12 animate-bounce" />
        </div>
        <Button className="w-full mt-4" variant="default" onClick={() => window.location.href = "/"}>
          Back to Home
        </Button>
      </div>
    </main>
  );
}
