import {Button, Card, CardBody, CardHeader, Checkbox, Input, Typography} from "@material-tailwind/react";
import React from "react";

const TABLE_HEAD = ["상품명", "경기일", "장소", "수량", "결제금액"];

const PaymentComponent = () => {

    return(
        <div className="w-full h-full p-10">
            <Card>
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Payment details
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                결제 내역
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="flex justify-center px-0">
                    <table className="w-full min-w-max table-auto text-center">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={index}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                        </thead>

                        <tbody>
                       {/* {selectedProducts.length > 0 ? (
                            selectedProducts.map((item, index) => (*/}
                                <tr className="p-4 border-b border-blue-gray-50" >{/* key={index} tr로 */}
                                    <td className="p-4">
                           {/*             <div className="flex items-center gap-3 justify-center mt-3">
                                            <Typography
                                                variant="h6"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                    1
                                            </Typography>
                                        </div>*/}
                                        <div className="flex items-center gap-3 justify-center">
                                            <Typography
                                                variant="h5"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                          상품명
                                            </Typography>
                                        </div>
                                        <div className="flex items-center gap-3 justify-center p-1 mb-3">
                                            <small>좌석</small>
                                        </div>
                                    </td>
                                    <td >
                                        <div className="flex items-center gap-3 justify-center p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                2024-05-16
                                            </Typography>
                                        </div>
                                    </td>
                                    <td >
                                        <div className="flex items-center gap-3 justify-center p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                              롤파크
                                            </Typography>
                                        </div>
                                    </td>
                                    <td >
                                        <div className="flex items-center gap-3 justify-center p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                1
                                            </Typography>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3 justify-center p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                              1원
                                            </Typography>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) {/*: (
                            <tr>
                                <td className="p-6 text-center" colSpan="7">
                                    결제하신 품목이 없습니다.
                                </td>
                            </tr>
                        )*/}
                        }
                        </tbody>
                    </table>
                </CardBody>
            </Card>

        </div>
    )
}
export default PaymentComponent