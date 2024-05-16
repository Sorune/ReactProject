import {Card, CardBody, CardHeader, Input, Typography} from "@material-tailwind/react";

const PaymentComponent = ({userInfo, selectedProducts}) => {

    return(
        <div className="w-full h-full p-10">
            <Card>
                <CardHeader   variant="gradient" color="gray" className="mb-4 grid h-28 place-items-center">
                    <Typography variant="h3" color={"white"}>
                        결제
                    </Typography>
                </CardHeader>
                <CardBody>
                    {selectedProducts.map(product => (
                        <div key={product.id}>
                            <Input label="section" value={product.data}/>
                        </div>
                    ))}
                </CardBody>
            </Card>

        </div>
    )
}
export default PaymentComponent