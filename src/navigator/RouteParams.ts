import { RouteKeys } from "./RouteKeys"

// Define the stack parameter list for your stack navigator
export type RouteStackParams = {
    [RouteKeys.Home] : undefined,
    [RouteKeys.BarcodeThroughCamera]: undefined,
    [RouteKeys.BarcodeThroughScanner]: undefined,
    [RouteKeys.PrintBarcode] : undefined
}

