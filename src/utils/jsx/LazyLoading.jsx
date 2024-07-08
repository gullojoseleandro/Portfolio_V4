import { Suspense, lazy } from "react";

const LazyLoading = ({ component }) => {

    let MyComponent = lazy(component);

    return(
        <>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    {MyComponent}
                </Suspense>
            </div>
        </>
    );
}

export default LazyLoading;