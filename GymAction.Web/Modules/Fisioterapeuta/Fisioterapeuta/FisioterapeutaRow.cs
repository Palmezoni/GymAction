
namespace GymAction.Fisioterapeuta.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Fisioterapeuta"), TableName("[dbo].[FISIOTERAPEUTA]")]
    [DisplayName("Fisioterapeutas"), InstanceName("Fisioterapeuta")]
    [ReadPermission("Fisioterapeuta:General")]
    [ModifyPermission("Fisioterapeuta:General")]
    [LookupScript("Fisioterapeuta.Fisioterapeuta")]
    public sealed class FisioterapeutaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cod Fisioterapeuta"), Column("COD_FISIOTERAPEUTA"), Identity, Visible(false)]
        public Int32? CodFisioterapeuta
        {
            get { return Fields.CodFisioterapeuta[this]; }
            set { Fields.CodFisioterapeuta[this] = value; }
        }

        [DisplayName("Nome"), Column("DES_NOME"), Size(100), NotNull, QuickSearch]
        public String DesNome
        {
            get { return Fields.DesNome[this]; }
            set { Fields.DesNome[this] = value; }
        }

        [DisplayName("Ativo"), Column("IDF_ATIVO"), NotNull, DefaultValue(true)]
        public Boolean? IdfAtivo
        {
            get { return Fields.IdfAtivo[this]; }
            set { Fields.IdfAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodFisioterapeuta; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FisioterapeutaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodFisioterapeuta;
            public StringField DesNome;
            public BooleanField IdfAtivo;
        }
    }
}
