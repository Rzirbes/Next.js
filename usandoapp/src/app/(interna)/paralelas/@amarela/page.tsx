function textoEm5s(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Amarela'), 5000)
    })
}

export default async function AmarelaPage() {
    const texto = await textoEm5s()
    return (
        <span>{texto}</span>
    )
}