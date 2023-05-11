import dayjs from "dayjs";
import { ReceivedAPI } from "src/service/ReceivedReceipt/ReceivedReceipt";
import {DeliveryAPI} from "../service/deliveryReceipt/DeliveryReceipt";

export const getDeliveryReceiptCodeOptions = async (code) => {
    try {
        let result = await DeliveryAPI.getAllDeliveryReceipt({
            page: 0,
            size: 10,
            code: code ? `%${code}%` : undefined,
        })
        if(result?.status === 200){
            let options = result?.data?.data.map(item => ({
                value: item.id,
                label: item.code
            }))
            return options
        }
    }catch (err){

    }finally {

    }
}

export const getAllReceivedReceiptCodeOptions = async (code) => {
    try{
        let result = await ReceivedAPI.getAllReceivedReceiptCodes({
            code: code
        })
        if(result?.status === 200){
            let options = result?.data?.data.map(item => ({
                value: item.id,
                label: item.code
            }))
            return options
        }
    }catch(err){

    }
}