import { useRouter } from 'next/navigation';
import {createQuote, updateQuote} from "@/app/apis/documentApi";
/*
   excludedTerms,
                             booleanObjectToArray,
                             numberArrayToObject,
                             TERMS,
                             resetField,
                             setTerms,
* */
/*{
                             update,
                             selectedTasks,
                             type,
                             data,
                             rowData,
                             slug,
                             currentId,
                            terms
                         }: any*/
/*const handleSave = () => {
       try {
           if (!update) {
               // Insert new document
               createQuoteMutation.mutate({
                   fields: selectedTasks,
                   service: type,
                   company: '',
                   type: 'quote',
                   custom_fields: data.customFields,
                   line_items: rowData,
                   notes: data.notesToClient,
                   client_id: slug,
               });
           } else {
/!*
               const selectedTerms = booleanObjectToArray(data.selectedTerms);
*!/
               updateQuoteMutation.mutate({
                   docId: currentId,
                   updateBody: {
                       fields: selectedTasks,
                       custom_fields: data.customFields,
                       line_items: rowData,
                       terms: terms,
                       notes: data.notesToClient,
                   },
               });
               /!*[...excludedTerms, ...selectedTerms].filter(
                           (value, index, self) => self.indexOf(value) === index
                       ),*!/
/!*
               // Update local terms and reset fields
               setTerms((prevState: any) =>
                   prevState.filter((el: any) => !selectedTerms.includes(el.order))
               );
               resetField('selectedTerms', {
                   defaultValue: numberArrayToObject(TERMS),
               });*!/
           }
       } catch (error: any) {
           console.error(update ? 'Error updating document' : 'Error adding document', error);
       }
   };*/
/*const updateQuoteMutation = useMutation(
       ({ docId, updateBody }: { docId: string; updateBody: any }) =>
           updateQuote(docId, updateBody),
       {
           onSuccess: () => {
               if (currentId) {
                   router.push(`/quote/${currentId}`);
                   queryClient.invalidateQueries('quotes');
               }
           },
           onError: () => {
               alert('Error updating document');
           },
       }
   );*/
export const useUpdateQuoteMutation = () => {

    return {}
};
export const useCreateQuoteMutation=()=>{
    const router = useRouter();
    return {}
}
