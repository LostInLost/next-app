export default function Page({params}) {
    const title = () => {
        if (params.title === 'first-posts') return 'First Post'
        if (params.title === 'second-posts') return "Second Post"
    }
    return (
        <>
        <div className="container mx-auto">
            <h1 className="text-[36px]">{title()}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est culpa neque molestias et necessitatibus, maxime fuga blanditiis. Cumque veniam, laboriosam quibusdam ex voluptate minima cum neque, blanditiis, repellat possimus maxime?
            </p>
        </div>
        </>
    )
}