import { createRouter, createWebHistory } from "vue-router"

import HomeComponents from "../components/HomeComponents"
import GastronomyComponents from "../components/GastronomyComponents"
import TouristAttractions from "../components/TouristAttractions"
import ServiceComponents from "../components/ServiceComponents"
import BookingComponents from "../components/BookingComponents"
// import FestivalComponents from "../components/FestivalComponents"

const routes = [
    { path: "/", component: HomeComponents },
    { path: "/Gastronomy", component: GastronomyComponents },
    { path: "/TouristAttractions", component: TouristAttractions },
    { path: "/Service", component: ServiceComponents },
    { path: "/Booking", component: BookingComponents },
    // { path: "/Festival", component: FestivalComponents }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router

