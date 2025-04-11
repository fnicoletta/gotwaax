import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function PaymentMethods() {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">Payment Methods</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-10 rounded border border-zinc-700"></div>
            <span className="text-gray-400">Visa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-10 rounded border border-zinc-700"></div>
            <span className="text-gray-400">Mastercard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-10 rounded border border-zinc-700"></div>
            <span className="text-gray-400">American Express</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 