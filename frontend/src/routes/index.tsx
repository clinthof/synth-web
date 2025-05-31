import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/")({ component: Index });

function Index() {
    return (
        <div>
            <h3>You are home</h3>
        </div>
    )
}