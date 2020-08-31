
namespace GymAction.PlanoAula.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("PlanoAula"), TableName("[dbo].[PLANO_AULA]")]
    [DisplayName("Planos vs Aulas"), InstanceName("Plano vs Aula")]
    [ReadPermission("PlanoAula:General")]
    [ModifyPermission("PlanoAula:General")]
    public sealed class PlanoAulaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cod Registro"), Column("COD_REGISTRO"), Identity, Visible(false)]
        public Int32? CodRegistro
        {
            get { return Fields.CodRegistro[this]; }
            set { Fields.CodRegistro[this] = value; }
        }
        [DisplayName("CPlano"), Column("COD_PLANO"), PrimaryKey, ForeignKey("[dbo].[PLANO]", "COD_PLANO"), LeftJoin("jCodPlano"), TextualField("CodPlanoDesNome"), NotNull]
        [LookupEditor("Plano.Plano")]
        public Int32? CodPlano
        {
            get { return Fields.CodPlano[this]; }
            set { Fields.CodPlano[this] = value; }
        }

        [DisplayName("CAula"), Column("COD_AULA"), PrimaryKey, ForeignKey("[dbo].[AULA]", "COD_AULA"), LeftJoin("jCodAula"), TextualField("CodAulaDesAula"), NotNull]
        [LookupEditor("Aula.Aula")]
        public Int32? CodAula
        {
            get { return Fields.CodAula[this]; }
            set { Fields.CodAula[this] = value; }
        }

        [DisplayName("Valor"), Column("VLR_AULA"), Size(19), Scale(4), NotNull]
        public Decimal? VlrAula
        {
            get { return Fields.VlrAula[this]; }
            set { Fields.VlrAula[this] = value; }
        }

        [DisplayName("Plano"), Expression("jCodPlano.[DES_NOME]"), QuickSearch]
        public String CodPlanoDesNome
        {
            get { return Fields.CodPlanoDesNome[this]; }
            set { Fields.CodPlanoDesNome[this] = value; }
        }

        [DisplayName("Cod Plano Idf Tipo"), Expression("jCodPlano.[IDF_TIPO]")]
        public String CodPlanoIdfTipo
        {
            get { return Fields.CodPlanoIdfTipo[this]; }
            set { Fields.CodPlanoIdfTipo[this] = value; }
        }

        [DisplayName("Cod Plano Idf Aivo"), Expression("jCodPlano.[IDF_AIVO]")]
        public Boolean? CodPlanoIdfAivo
        {
            get { return Fields.CodPlanoIdfAivo[this]; }
            set { Fields.CodPlanoIdfAivo[this] = value; }
        }

        [DisplayName("Aula"), Expression("jCodAula.[DES_AULA]"), QuickSearch]
        public String CodAulaDesAula
        {
            get { return Fields.CodAulaDesAula[this]; }
            set { Fields.CodAulaDesAula[this] = value; }
        }

        [DisplayName("Cod Aula Idf Tipo Atividade"), Expression("jCodAula.[IDF_TIPO_ATIVIDADE]")]
        public Boolean? CodAulaIdfTipoAtividade
        {
            get { return Fields.CodAulaIdfTipoAtividade[this]; }
            set { Fields.CodAulaIdfTipoAtividade[this] = value; }
        }

        [DisplayName("Cod Aula Idf Ativo"), Expression("jCodAula.[IDF_ATIVO]")]
        public Boolean? CodAulaIdfAtivo
        {
            get { return Fields.CodAulaIdfAtivo[this]; }
            set { Fields.CodAulaIdfAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodRegistro; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.CodPlanoDesNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PlanoAulaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodRegistro;
            public Int32Field CodPlano;
            public Int32Field CodAula;
            public DecimalField VlrAula;

            public StringField CodPlanoDesNome;
            public StringField CodPlanoIdfTipo;
            public BooleanField CodPlanoIdfAivo;

            public StringField CodAulaDesAula;
            public BooleanField CodAulaIdfTipoAtividade;
            public BooleanField CodAulaIdfAtivo;
        }
    }
}
