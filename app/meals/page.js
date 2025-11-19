import { Suspense } from "react"
import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"


async function Meals() {
    const meals= await getMeals()
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {

    return (
        <>
        <header className={classes.header}>
            <h1>Delicious Meal, crated <span className={classes.highlight}>by you</span></h1>
            <p>Choose your favourite receipe and cook it for fun</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your favourite raceipe</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Meals are loading</p>}>
                <Meals />
            </Suspense>
        </main>
        </>
    )
}