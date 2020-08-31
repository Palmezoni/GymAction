/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace GymAction.Administration {
}
declare namespace GymAction.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace GymAction.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace GymAction.Administration {
}
declare namespace GymAction.Administration {
}
declare namespace GymAction.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GymAction.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace GymAction.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace GymAction.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace GymAction.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace GymAction.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace GymAction.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace GymAction.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace GymAction.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace GymAction.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace GymAction.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace GymAction.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace GymAction.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace GymAction.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace GymAction.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace GymAction.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace GymAction.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace GymAction.Administration {
}
declare namespace GymAction.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GymAction.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GymAction.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace GymAction.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace GymAction.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace GymAction.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace GymAction.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GymAction.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace GymAction.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace GymAction.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace GymAction.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace GymAction.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace GymAction.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace GymAction.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace GymAction.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace GymAction.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace GymAction {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace GymAction {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace GymAction {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace GymAction {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace GymAction.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GymAction.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace GymAction.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace GymAction.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GymAction.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GymAction.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace GymAction {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace GymAction.Texts {
}
declare namespace GymAction.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace GymAction.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace GymAction.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace GymAction.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace GymAction.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace GymAction.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace GymAction.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace GymAction.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace GymAction.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace GymAction.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace GymAction.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace GymAction.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace GymAction.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace GymAction.LanguageList {
    function getValue(): string[][];
}
declare namespace GymAction.ScriptInitialization {
}
declare namespace GymAction {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace GymAction.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace GymAction.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace GymAction.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace GymAction.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace GymAction.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace GymAction.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace GymAction {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace GymAction.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace GymAction.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace GymAction.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace GymAction.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace GymAction.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace GymAction.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace GymAction.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace GymAction.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace GymAction.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace GymAction.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Cliente {
    class ClienteForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ClienteForm {
        CodBiometria: Serenity.IntegerEditor;
        DesNome: Serenity.StringEditor;
        DesRg: Serenity.StringEditor;
        DesCpf: Serenity.StringEditor;
        IdfAdimplente: Serenity.BooleanEditor;
        IdfAtivo: Serenity.BooleanEditor;
        DesEndereco: Serenity.StringEditor;
    }
}
declare namespace GymAction.Cliente {
    interface ClienteRow {
        CodCliente?: number;
        CodBiometria?: number;
        DesNome?: string;
        DesRg?: string;
        DesCpf?: string;
        IdfAdimplente?: boolean;
        IdfAtivo?: boolean;
        DesEndereco?: string;
    }
    namespace ClienteRow {
        const idProperty = "CodCliente";
        const nameProperty = "DesNome";
        const localTextPrefix = "Cliente.Cliente";
        const deletePermission = "Cliente:General";
        const insertPermission = "Cliente:General";
        const readPermission = "Cliente:General";
        const updatePermission = "Cliente:General";
        namespace Fields {
            const CodCliente: any;
            const CodBiometria: any;
            const DesNome: any;
            const DesRg: any;
            const DesCpf: any;
            const IdfAdimplente: any;
            const IdfAtivo: any;
            const DesEndereco: any;
        }
    }
}
declare namespace GymAction.Cliente {
    namespace ClienteService {
        const baseUrl = "Cliente/Cliente";
        function Create(request: Serenity.SaveRequest<ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.Cliente {
    class ClienteDialog extends Serenity.EntityDialog<ClienteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClienteForm;
    }
}
declare namespace GymAction.Cliente {
    class ClienteGrid extends Serenity.EntityGrid<ClienteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClienteDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace GymAction.Fisioterapeuta {
    class FisioterapeutaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FisioterapeutaForm {
        DesNome: Serenity.StringEditor;
        IdfAtivo: Serenity.BooleanEditor;
    }
}
declare namespace GymAction.Fisioterapeuta {
    interface FisioterapeutaRow {
        CodFisioterapeuta?: number;
        DesNome?: string;
        IdfAtivo?: boolean;
    }
    namespace FisioterapeutaRow {
        const idProperty = "CodFisioterapeuta";
        const nameProperty = "DesNome";
        const localTextPrefix = "Fisioterapeuta.Fisioterapeuta";
        const deletePermission = "Fisioterapeuta:General";
        const insertPermission = "Fisioterapeuta:General";
        const readPermission = "Fisioterapeuta:General";
        const updatePermission = "Fisioterapeuta:General";
        namespace Fields {
            const CodFisioterapeuta: any;
            const DesNome: any;
            const IdfAtivo: any;
        }
    }
}
declare namespace GymAction.Fisioterapeuta {
    namespace FisioterapeutaService {
        const baseUrl = "Fisioterapeuta/Fisioterapeuta";
        function Create(request: Serenity.SaveRequest<FisioterapeutaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FisioterapeutaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FisioterapeutaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FisioterapeutaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.Fisioterapeuta {
    class FisioterapeutaDialog extends Serenity.EntityDialog<FisioterapeutaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FisioterapeutaForm;
    }
}
declare namespace GymAction.Fisioterapeuta {
    class FisioterapeutaGrid extends Serenity.EntityGrid<FisioterapeutaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FisioterapeutaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.AvaliacaoFisica {
    class AvaliacaoFisicaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AvaliacaoFisicaForm {
        CodCliente: Serenity.IntegerEditor;
        CodFisioterapeuta: Serenity.IntegerEditor;
        DesAnamnese: Serenity.StringEditor;
        DesExameDobras: Serenity.StringEditor;
        DesExameErgometrico: Serenity.StringEditor;
        DatAvaliacao: Serenity.DateEditor;
    }
}
declare namespace GymAction.AvaliacaoFisica {
    interface AvaliacaoFisicaRow {
        CodAvaliacaoFisica?: number;
        CodCliente?: number;
        CodFisioterapeuta?: number;
        DesAnamnese?: string;
        DesExameDobras?: string;
        DesExameErgometrico?: string;
        DatAvaliacao?: string;
        CodClienteCodBiometria?: number;
        CodClienteDesNome?: string;
        CodClienteDesRg?: string;
        CodClienteDesCpf?: string;
        CodClienteIdfAdimplente?: boolean;
        CodClienteIdfAtivo?: boolean;
        CodClienteDesEndereco?: string;
        CodFisioterapeutaDesNome?: string;
        CodFisioterapeutaIdfAtivo?: boolean;
    }
    namespace AvaliacaoFisicaRow {
        const idProperty = "CodAvaliacaoFisica";
        const nameProperty = "DesAnamnese";
        const localTextPrefix = "AvaliacaoFisica.AvaliacaoFisica";
        const deletePermission = "AvaliacaoFisica:General";
        const insertPermission = "AvaliacaoFisica:General";
        const readPermission = "AvaliacaoFisica:General";
        const updatePermission = "AvaliacaoFisica:General";
        namespace Fields {
            const CodAvaliacaoFisica: any;
            const CodCliente: any;
            const CodFisioterapeuta: any;
            const DesAnamnese: any;
            const DesExameDobras: any;
            const DesExameErgometrico: any;
            const DatAvaliacao: any;
            const CodClienteCodBiometria: any;
            const CodClienteDesNome: any;
            const CodClienteDesRg: any;
            const CodClienteDesCpf: any;
            const CodClienteIdfAdimplente: any;
            const CodClienteIdfAtivo: any;
            const CodClienteDesEndereco: any;
            const CodFisioterapeutaDesNome: any;
            const CodFisioterapeutaIdfAtivo: any;
        }
    }
}
declare namespace GymAction.AvaliacaoFisica {
    namespace AvaliacaoFisicaService {
        const baseUrl = "AvaliacaoFisica/AvaliacaoFisica";
        function Create(request: Serenity.SaveRequest<AvaliacaoFisicaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AvaliacaoFisicaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvaliacaoFisicaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvaliacaoFisicaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.AvaliacaoFisica {
    class AvaliacaoFisicaDialog extends Serenity.EntityDialog<AvaliacaoFisicaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AvaliacaoFisicaForm;
    }
}
declare namespace GymAction.AvaliacaoFisica {
    class AvaliacaoFisicaGrid extends Serenity.EntityGrid<AvaliacaoFisicaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AvaliacaoFisicaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Plano {
    class PlanoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PlanoForm {
        DesNome: Serenity.StringEditor;
        IdfTipo: Serenity.StringEditor;
        IdfAivo: Serenity.BooleanEditor;
    }
}
declare namespace GymAction.Plano {
    interface PlanoRow {
        CodPlano?: number;
        DesNome?: string;
        IdfTipo?: string;
        IdfAivo?: boolean;
    }
    namespace PlanoRow {
        const idProperty = "CodPlano";
        const nameProperty = "DesNome";
        const localTextPrefix = "Plano.Plano";
        const deletePermission = "Plano:General";
        const insertPermission = "Plano:General";
        const readPermission = "Plano:General";
        const updatePermission = "Plano:General";
        namespace Fields {
            const CodPlano: any;
            const DesNome: any;
            const IdfTipo: any;
            const IdfAivo: any;
        }
    }
}
declare namespace GymAction.Plano {
    namespace PlanoService {
        const baseUrl = "Plano/Plano";
        function Create(request: Serenity.SaveRequest<PlanoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PlanoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PlanoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PlanoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.Plano {
    class PlanoDialog extends Serenity.EntityDialog<PlanoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PlanoForm;
    }
}
declare namespace GymAction.Plano {
    class PlanoGrid extends Serenity.EntityGrid<PlanoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PlanoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Aula {
    class AulaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AulaForm {
        DesAula: Serenity.StringEditor;
        IdfTipoAtividade: Serenity.BooleanEditor;
        IdfAtivo: Serenity.BooleanEditor;
    }
}
declare namespace GymAction.Aula {
    interface AulaRow {
        CodAula?: number;
        DesAula?: string;
        IdfTipoAtividade?: boolean;
        IdfAtivo?: boolean;
    }
    namespace AulaRow {
        const idProperty = "CodAula";
        const nameProperty = "DesAula";
        const localTextPrefix = "Aula.Aula";
        const deletePermission = "Aula:General";
        const insertPermission = "Aula:General";
        const readPermission = "Aula:General";
        const updatePermission = "Aula:General";
        namespace Fields {
            const CodAula: any;
            const DesAula: any;
            const IdfTipoAtividade: any;
            const IdfAtivo: any;
        }
    }
}
declare namespace GymAction.Aula {
    namespace AulaService {
        const baseUrl = "Aula/Aula";
        function Create(request: Serenity.SaveRequest<AulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.Aula {
    class AulaDialog extends Serenity.EntityDialog<AulaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AulaForm;
    }
}
declare namespace GymAction.Aula {
    class AulaGrid extends Serenity.EntityGrid<AulaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AulaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Instrutor {
    class InstrutorForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface InstrutorForm {
        DesNome: Serenity.StringEditor;
        DesRg: Serenity.StringEditor;
        DesCpf: Serenity.StringEditor;
        IdfTipoAtividade: Serenity.BooleanEditor;
        IdfAtivo: Serenity.BooleanEditor;
    }
}
declare namespace GymAction.Instrutor {
    interface InstrutorRow {
        CodInstrutor?: number;
        DesNome?: string;
        DesRg?: string;
        DesCpf?: string;
        IdfTipoAtividade?: boolean;
        IdfAtivo?: boolean;
    }
    namespace InstrutorRow {
        const idProperty = "CodInstrutor";
        const nameProperty = "DesNome";
        const localTextPrefix = "Instrutor.Instrutor";
        const deletePermission = "Instrutor:General";
        const insertPermission = "Instrutor:General";
        const readPermission = "Instrutor:General";
        const updatePermission = "Instrutor:General";
        namespace Fields {
            const CodInstrutor: any;
            const DesNome: any;
            const DesRg: any;
            const DesCpf: any;
            const IdfTipoAtividade: any;
            const IdfAtivo: any;
        }
    }
}
declare namespace GymAction.Instrutor {
    namespace InstrutorService {
        const baseUrl = "Instrutor/Instrutor";
        function Create(request: Serenity.SaveRequest<InstrutorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstrutorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstrutorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstrutorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.Instrutor {
    class InstrutorDialog extends Serenity.EntityDialog<InstrutorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstrutorForm;
    }
}
declare namespace GymAction.Instrutor {
    class InstrutorGrid extends Serenity.EntityGrid<InstrutorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstrutorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.AulaInstrutor {
    class AulaInstrutorForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AulaInstrutorForm {
        CodInstrutor: Serenity.IntegerEditor;
        HorInicio: Serenity.StringEditor;
        HorFim: Serenity.StringEditor;
        IdfSegunda: Serenity.BooleanEditor;
        IdfTerca: Serenity.BooleanEditor;
        IdfQuarta: Serenity.BooleanEditor;
        IdfQuinta: Serenity.BooleanEditor;
        IdfSexta: Serenity.BooleanEditor;
        IdfSabado: Serenity.BooleanEditor;
        IdfDomingo: Serenity.BooleanEditor;
        DesSala: Serenity.StringEditor;
    }
}
declare namespace GymAction.AulaInstrutor {
    interface AulaInstrutorRow {
        CodAula?: number;
        CodInstrutor?: number;
        HorInicio?: string;
        HorFim?: string;
        IdfSegunda?: boolean;
        IdfTerca?: boolean;
        IdfQuarta?: boolean;
        IdfQuinta?: boolean;
        IdfSexta?: boolean;
        IdfSabado?: boolean;
        IdfDomingo?: boolean;
        DesSala?: string;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
        CodInstrutorDesNome?: string;
        CodInstrutorDesRg?: string;
        CodInstrutorDesCpf?: string;
        CodInstrutorIdfTipoAtividade?: boolean;
        CodInstrutorIdfAtivo?: boolean;
    }
    namespace AulaInstrutorRow {
        const idProperty = "CodAula";
        const nameProperty = "HorInicio";
        const localTextPrefix = "AulaInstrutor.AulaInstrutor";
        const deletePermission = "AulaInstrutor:General";
        const insertPermission = "AulaInstrutor:General";
        const readPermission = "AulaInstrutor:General";
        const updatePermission = "AulaInstrutor:General";
        namespace Fields {
            const CodAula: any;
            const CodInstrutor: any;
            const HorInicio: any;
            const HorFim: any;
            const IdfSegunda: any;
            const IdfTerca: any;
            const IdfQuarta: any;
            const IdfQuinta: any;
            const IdfSexta: any;
            const IdfSabado: any;
            const IdfDomingo: any;
            const DesSala: any;
            const CodAulaDesAula: any;
            const CodAulaIdfTipoAtividade: any;
            const CodAulaIdfAtivo: any;
            const CodInstrutorDesNome: any;
            const CodInstrutorDesRg: any;
            const CodInstrutorDesCpf: any;
            const CodInstrutorIdfTipoAtividade: any;
            const CodInstrutorIdfAtivo: any;
        }
    }
}
declare namespace GymAction.AulaInstrutor {
    namespace AulaInstrutorService {
        const baseUrl = "AulaInstrutor/AulaInstrutor";
        function Create(request: Serenity.SaveRequest<AulaInstrutorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AulaInstrutorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AulaInstrutorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AulaInstrutorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.AulaInstrutor {
    class AulaInstrutorDialog extends Serenity.EntityDialog<AulaInstrutorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AulaInstrutorForm;
    }
}
declare namespace GymAction.AulaInstrutor {
    class AulaInstrutorGrid extends Serenity.EntityGrid<AulaInstrutorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AulaInstrutorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.PlanoAula {
    class PlanoAulaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PlanoAulaForm {
        CodAula: Serenity.IntegerEditor;
        VlrAula: Serenity.DecimalEditor;
    }
}
declare namespace GymAction.PlanoAula {
    interface PlanoAulaRow {
        CodPlano?: number;
        CodAula?: number;
        VlrAula?: number;
        CodPlanoDesNome?: string;
        CodPlanoIdfTipo?: string;
        CodPlanoIdfAivo?: boolean;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
    }
    namespace PlanoAulaRow {
        const idProperty = "CodPlano";
        const localTextPrefix = "PlanoAula.PlanoAula";
        const deletePermission = "PlanoAula:General";
        const insertPermission = "PlanoAula:General";
        const readPermission = "PlanoAula:General";
        const updatePermission = "PlanoAula:General";
        namespace Fields {
            const CodPlano: any;
            const CodAula: any;
            const VlrAula: any;
            const CodPlanoDesNome: any;
            const CodPlanoIdfTipo: any;
            const CodPlanoIdfAivo: any;
            const CodAulaDesAula: any;
            const CodAulaIdfTipoAtividade: any;
            const CodAulaIdfAtivo: any;
        }
    }
}
declare namespace GymAction.PlanoAula {
    namespace PlanoAulaService {
        const baseUrl = "PlanoAula/PlanoAula";
        function Create(request: Serenity.SaveRequest<PlanoAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PlanoAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PlanoAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PlanoAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.PlanoAula {
    class PlanoAulaDialog extends Serenity.EntityDialog<PlanoAulaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PlanoAulaForm;
    }
}
declare namespace GymAction.PlanoAula {
    class PlanoAulaGrid extends Serenity.EntityGrid<PlanoAulaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PlanoAulaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.ClientePlanoAula {
    class ClientePlanoAulaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ClientePlanoAulaForm {
        Aula: Serenity.IntegerEditor;
        Cliente: Serenity.IntegerEditor;
    }
}
declare namespace GymAction.ClientePlanoAula {
    interface ClientePlanoAulaRow {
        Plano?: number;
        Aula?: number;
        Cliente?: number;
        PlanoDesNome?: string;
        PlanoIdfTipo?: string;
        PlanoIdfAivo?: boolean;
        AulaDesAula?: string;
        AulaIdfTipoAtividade?: boolean;
        AulaIdfAtivo?: boolean;
        ClienteCodBiometria?: number;
        ClienteDesNome?: string;
        ClienteDesRg?: string;
        ClienteDesCpf?: string;
        ClienteIdfAdimplente?: boolean;
        ClienteIdfAtivo?: boolean;
        ClienteDesEndereco?: string;
    }
    namespace ClientePlanoAulaRow {
        const idProperty = "Plano";
        const localTextPrefix = "ClientePlanoAula.ClientePlanoAula";
        const deletePermission = "ClientePlanoAula:General";
        const insertPermission = "ClientePlanoAula:General";
        const readPermission = "ClientePlanoAula:General";
        const updatePermission = "ClientePlanoAula:General";
        namespace Fields {
            const Plano: any;
            const Aula: any;
            const Cliente: any;
            const PlanoDesNome: any;
            const PlanoIdfTipo: any;
            const PlanoIdfAivo: any;
            const AulaDesAula: any;
            const AulaIdfTipoAtividade: any;
            const AulaIdfAtivo: any;
            const ClienteCodBiometria: any;
            const ClienteDesNome: any;
            const ClienteDesRg: any;
            const ClienteDesCpf: any;
            const ClienteIdfAdimplente: any;
            const ClienteIdfAtivo: any;
            const ClienteDesEndereco: any;
        }
    }
}
declare namespace GymAction.ClientePlanoAula {
    namespace ClientePlanoAulaService {
        const baseUrl = "ClientePlanoAula/ClientePlanoAula";
        function Create(request: Serenity.SaveRequest<ClientePlanoAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClientePlanoAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClientePlanoAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClientePlanoAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.ClientePlanoAula {
    class ClientePlanoAulaDialog extends Serenity.EntityDialog<ClientePlanoAulaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClientePlanoAulaForm;
    }
}
declare namespace GymAction.ClientePlanoAula {
    class ClientePlanoAulaGrid extends Serenity.EntityGrid<ClientePlanoAulaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClientePlanoAulaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.RegistroAula {
    class RegistroAulaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RegistroAulaForm {
        CodPlano: Serenity.IntegerEditor;
        CodAula: Serenity.IntegerEditor;
        CodCliente: Serenity.IntegerEditor;
        DatAula: Serenity.DateEditor;
    }
}
declare namespace GymAction.RegistroAula {
    interface RegistroAulaRow {
        CodRegistro?: number;
        CodPlano?: number;
        CodAula?: number;
        CodCliente?: number;
        DatAula?: string;
        CodPlanoDesNome?: string;
        CodPlanoIdfTipo?: string;
        CodPlanoIdfAivo?: boolean;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
        CodClienteCodBiometria?: number;
        CodClienteDesNome?: string;
        CodClienteDesRg?: string;
        CodClienteDesCpf?: string;
        CodClienteIdfAdimplente?: boolean;
        CodClienteIdfAtivo?: boolean;
        CodClienteDesEndereco?: string;
    }
    namespace RegistroAulaRow {
        const idProperty = "CodRegistro";
        const localTextPrefix = "RegistroAula.RegistroAula";
        const deletePermission = "RegistroAula:General";
        const insertPermission = "RegistroAula:General";
        const readPermission = "RegistroAula:General";
        const updatePermission = "RegistroAula:General";
        namespace Fields {
            const CodRegistro: any;
            const CodPlano: any;
            const CodAula: any;
            const CodCliente: any;
            const DatAula: any;
            const CodPlanoDesNome: any;
            const CodPlanoIdfTipo: any;
            const CodPlanoIdfAivo: any;
            const CodAulaDesAula: any;
            const CodAulaIdfTipoAtividade: any;
            const CodAulaIdfAtivo: any;
            const CodClienteCodBiometria: any;
            const CodClienteDesNome: any;
            const CodClienteDesRg: any;
            const CodClienteDesCpf: any;
            const CodClienteIdfAdimplente: any;
            const CodClienteIdfAtivo: any;
            const CodClienteDesEndereco: any;
        }
    }
}
declare namespace GymAction.RegistroAula {
    namespace RegistroAulaService {
        const baseUrl = "RegistroAula/RegistroAula";
        function Create(request: Serenity.SaveRequest<RegistroAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegistroAulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegistroAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegistroAulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.RegistroAula {
    class RegistroAulaDialog extends Serenity.EntityDialog<RegistroAulaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RegistroAulaForm;
    }
}
declare namespace GymAction.RegistroAula {
    class RegistroAulaGrid extends Serenity.EntityGrid<RegistroAulaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegistroAulaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Ferias {
    class FeriasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FeriasForm {
        CodPlano: Serenity.IntegerEditor;
        CodAula: Serenity.IntegerEditor;
        CodCliente: Serenity.IntegerEditor;
        DatInicio: Serenity.DateEditor;
        DatFim: Serenity.DateEditor;
    }
}
declare namespace GymAction.Ferias {
    interface FeriasRow {
        CodFerias?: number;
        CodPlano?: number;
        CodAula?: number;
        CodCliente?: number;
        DatInicio?: string;
        DatFim?: string;
        CodPlanoDesNome?: string;
        CodPlanoIdfTipo?: string;
        CodPlanoIdfAivo?: boolean;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
        CodClienteCodBiometria?: number;
        CodClienteDesNome?: string;
        CodClienteDesRg?: string;
        CodClienteDesCpf?: string;
        CodClienteIdfAdimplente?: boolean;
        CodClienteIdfAtivo?: boolean;
        CodClienteDesEndereco?: string;
    }
    namespace FeriasRow {
        const idProperty = "CodFerias";
        const localTextPrefix = "Ferias.Ferias";
        const deletePermission = "Ferias:General";
        const insertPermission = "Ferias:General";
        const readPermission = "Ferias:General";
        const updatePermission = "Ferias:General";
        namespace Fields {
            const CodFerias: any;
            const CodPlano: any;
            const CodAula: any;
            const CodCliente: any;
            const DatInicio: any;
            const DatFim: any;
            const CodPlanoDesNome: any;
            const CodPlanoIdfTipo: any;
            const CodPlanoIdfAivo: any;
            const CodAulaDesAula: any;
            const CodAulaIdfTipoAtividade: any;
            const CodAulaIdfAtivo: any;
            const CodClienteCodBiometria: any;
            const CodClienteDesNome: any;
            const CodClienteDesRg: any;
            const CodClienteDesCpf: any;
            const CodClienteIdfAdimplente: any;
            const CodClienteIdfAtivo: any;
            const CodClienteDesEndereco: any;
        }
    }
}
declare namespace GymAction.Ferias {
    namespace FeriasService {
        const baseUrl = "Ferias/Ferias";
        function Create(request: Serenity.SaveRequest<FeriasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeriasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeriasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeriasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.Ferias {
    class FeriasDialog extends Serenity.EntityDialog<FeriasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FeriasForm;
    }
}
declare namespace GymAction.Ferias {
    class FeriasGrid extends Serenity.EntityGrid<FeriasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeriasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Pagamento {
    class PagamentoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PagamentoForm {
        CodPlano: Serenity.IntegerEditor;
        CodAula: Serenity.IntegerEditor;
        CodCliente: Serenity.IntegerEditor;
        DatVencimento: Serenity.DateEditor;
        DatPagamento: Serenity.DateEditor;
        VlrPago: Serenity.DecimalEditor;
    }
}
declare namespace GymAction.Pagamento {
    interface PagamentoRow {
        CodPagamento?: number;
        CodPlano?: number;
        CodAula?: number;
        CodCliente?: number;
        DatVencimento?: string;
        DatPagamento?: string;
        VlrPago?: number;
        CodPlanoDesNome?: string;
        CodPlanoIdfTipo?: string;
        CodPlanoIdfAivo?: boolean;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
        CodClienteCodBiometria?: number;
        CodClienteDesNome?: string;
        CodClienteDesRg?: string;
        CodClienteDesCpf?: string;
        CodClienteIdfAdimplente?: boolean;
        CodClienteIdfAtivo?: boolean;
        CodClienteDesEndereco?: string;
    }
    namespace PagamentoRow {
        const idProperty = "CodPagamento";
        const localTextPrefix = "Pagamento.Pagamento";
        const deletePermission = "Pagamento:General";
        const insertPermission = "Pagamento:General";
        const readPermission = "Pagamento:General";
        const updatePermission = "Pagamento:General";
        namespace Fields {
            const CodPagamento: any;
            const CodPlano: any;
            const CodAula: any;
            const CodCliente: any;
            const DatVencimento: any;
            const DatPagamento: any;
            const VlrPago: any;
            const CodPlanoDesNome: any;
            const CodPlanoIdfTipo: any;
            const CodPlanoIdfAivo: any;
            const CodAulaDesAula: any;
            const CodAulaIdfTipoAtividade: any;
            const CodAulaIdfAtivo: any;
            const CodClienteCodBiometria: any;
            const CodClienteDesNome: any;
            const CodClienteDesRg: any;
            const CodClienteDesCpf: any;
            const CodClienteIdfAdimplente: any;
            const CodClienteIdfAtivo: any;
            const CodClienteDesEndereco: any;
        }
    }
}
declare namespace GymAction.Pagamento {
    namespace PagamentoService {
        const baseUrl = "Pagamento/Pagamento";
        function Create(request: Serenity.SaveRequest<PagamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PagamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PagamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PagamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GymAction.Pagamento {
    class PagamentoDialog extends Serenity.EntityDialog<PagamentoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PagamentoForm;
    }
}
declare namespace GymAction.Pagamento {
    class PagamentoGrid extends Serenity.EntityGrid<PagamentoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PagamentoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GymAction.Aula {
}
declare namespace GymAction.AulaInstrutor {
}
declare namespace GymAction.AvaliacaoFisica {
}
declare namespace GymAction.Cliente {
}
declare namespace GymAction.ClientePlanoAula {
}
declare namespace GymAction.Ferias {
}
declare namespace GymAction.Fisioterapeuta {
}
declare namespace GymAction.Instrutor {
}
declare namespace GymAction.Pagamento {
}
declare namespace GymAction.Plano {
}
declare namespace GymAction.PlanoAula {
}
declare namespace GymAction.RegistroAula {
}
declare namespace GymAction.Aula {
    enum AulaTipo {
        Individual = 1,
        Grupo = 2
    }
}
declare namespace GymAction.Plano {
    enum PlanoTipo {
        Mensal = 0,
        Anual = 1
    }
}
declare namespace GymAction.Instrutor {
    enum InstrutorTipo {
        Individual = 0,
        Grupo = 1,
        Todas = 2
    }
}
