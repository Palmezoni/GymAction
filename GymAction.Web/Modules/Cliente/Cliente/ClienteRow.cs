
namespace GymAction.Cliente.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Cliente"), TableName("[dbo].[CLIENTE]")]
    [DisplayName("Clientes"), InstanceName("Cliente")]
    [ReadPermission("Cliente:General")]
    [ModifyPermission("Cliente:General")]
    [LookupScript("Cliente.Cliente")]
    public sealed class ClienteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cod Cliente"), Column("COD_CLIENTE"), Identity, Visible(false)]
        public Int32? CodCliente
        {
            get { return Fields.CodCliente[this]; }
            set { Fields.CodCliente[this] = value; }
        }

        [DisplayName("Biometria"), Column("COD_BIOMETRIA"), NotNull]
        public Int32? CodBiometria
        {
            get { return Fields.CodBiometria[this]; }
            set { Fields.CodBiometria[this] = value; }
        }

        [DisplayName("Nome"), Column("DES_NOME"), Size(100), NotNull, QuickSearch]
        public String DesNome
        {
            get { return Fields.DesNome[this]; }
            set { Fields.DesNome[this] = value; }
        }

        [DisplayName("RG"), Column("DES_RG"), Size(20), NotNull, QuickSearch]
        public String DesRg
        {
            get { return Fields.DesRg[this]; }
            set { Fields.DesRg[this] = value; }
        }

        [DisplayName("CPF"), Column("DES_CPF"), Size(14), NotNull, QuickSearch]
        public String DesCpf
        {
            get { return Fields.DesCpf[this]; }
            set { Fields.DesCpf[this] = value; }
        }

        [DisplayName("Adimplente"), Column("IDF_ADIMPLENTE"), NotNull, DefaultValue(true)]
        public Boolean? IdfAdimplente
        {
            get { return Fields.IdfAdimplente[this]; }
            set { Fields.IdfAdimplente[this] = value; }
        }

        [DisplayName("Ativo"), Column("IDF_ATIVO"), NotNull, DefaultValue(true)]
        public Boolean? IdfAtivo
        {
            get { return Fields.IdfAtivo[this]; }
            set { Fields.IdfAtivo[this] = value; }
        }

        [DisplayName("Endereço"), Column("DES_ENDERECO"), Size(200), NotNull]
        public String DesEndereco
        {
            get { return Fields.DesEndereco[this]; }
            set { Fields.DesEndereco[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodCliente; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClienteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodCliente;
            public Int32Field CodBiometria;
            public StringField DesNome;
            public StringField DesRg;
            public StringField DesCpf;
            public BooleanField IdfAdimplente;
            public BooleanField IdfAtivo;
            public StringField DesEndereco;
        }
    }
}
