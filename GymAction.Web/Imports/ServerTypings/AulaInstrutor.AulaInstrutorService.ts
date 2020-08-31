namespace GymAction.AulaInstrutor {
    export namespace AulaInstrutorService {
        export const baseUrl = 'AulaInstrutor/AulaInstrutor';

        export declare function Create(request: Serenity.SaveRequest<AulaInstrutorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AulaInstrutorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AulaInstrutorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AulaInstrutorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AulaInstrutor/AulaInstrutor/Create",
            Update = "AulaInstrutor/AulaInstrutor/Update",
            Delete = "AulaInstrutor/AulaInstrutor/Delete",
            Retrieve = "AulaInstrutor/AulaInstrutor/Retrieve",
            List = "AulaInstrutor/AulaInstrutor/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AulaInstrutorService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
