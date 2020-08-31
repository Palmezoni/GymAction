namespace GymAction.Fisioterapeuta {
    export namespace FisioterapeutaService {
        export const baseUrl = 'Fisioterapeuta/Fisioterapeuta';

        export declare function Create(request: Serenity.SaveRequest<FisioterapeutaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FisioterapeutaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FisioterapeutaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FisioterapeutaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Fisioterapeuta/Fisioterapeuta/Create",
            Update = "Fisioterapeuta/Fisioterapeuta/Update",
            Delete = "Fisioterapeuta/Fisioterapeuta/Delete",
            Retrieve = "Fisioterapeuta/Fisioterapeuta/Retrieve",
            List = "Fisioterapeuta/Fisioterapeuta/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FisioterapeutaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
