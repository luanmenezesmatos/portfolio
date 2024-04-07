import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Header } from "@/components/global/header";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header />

        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex-col items-start gap-8 md:flex">
            {/* <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Sobre Mim
                </legend>
                <div className="grid gap-3">
                  Oi
                </div>
              </fieldset> */}

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur
                </CardDescription>
              </CardContent>
              <CardFooter>
                <button className="btn btn-primary">Botão</button>
              </CardFooter>
            </Card>
          </div>
          <Card className="relative flex h-full min-h-[50vh] flex-col rounded-xl lg:col-span-2">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </CardDescription>
            </CardContent>
            <CardFooter>
              <button className="btn btn-primary">Botão</button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}
