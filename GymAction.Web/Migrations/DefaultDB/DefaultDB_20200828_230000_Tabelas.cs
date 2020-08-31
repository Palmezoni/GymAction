using FluentMigrator;

namespace GymAction.Migrations.DefaultDB
{
    [Migration(20200828230000)]
    public class DefaultDB_20200828_230000_Tabelas : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CLIENTE")
                .WithColumn("COD_CLIENTE").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("COD_BIOMETRIA").AsInt32().NotNullable()
                .WithColumn("DES_NOME").AsString(100).NotNullable()
                .WithColumn("DES_RG").AsString(20).NotNullable()
                .WithColumn("DES_CPF").AsString(14).NotNullable()
                .WithColumn("IDF_ADIMPLENTE").AsBoolean().NotNullable()
                .WithColumn("IDF_ATIVO").AsBoolean().NotNullable()
                .WithColumn("DES_ENDERECO").AsString(200);

            Create.Table("FISIOTERAPEUTA")
                .WithColumn("COD_FISIOTERAPEUTA").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("DES_NOME").AsString(100).NotNullable()
                .WithColumn("IDF_ATIVO").AsBoolean().NotNullable();

            Create.Table("AVALIACAO_FISICA")
                .WithColumn("COD_AVALIACAO_FISICA").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("COD_CLIENTE").AsInt32().NotNullable()
                    .ForeignKey("FK_AF_CLI", "CLIENTE", "COD_CLIENTE")
                .WithColumn("COD_FISIOTERAPEUTA").AsInt32().NotNullable()
                    .ForeignKey("FK_AF_FIS", "FISIOTERAPEUTA", "COD_FISIOTERAPEUTA")
                .WithColumn("DES_ANAMNESE").AsString(2000).NotNullable()
                .WithColumn("DES_EXAME_DOBRAS").AsString(2000).NotNullable()
                .WithColumn("DES_EXAME_ERGOMETRICO").AsString(2000).NotNullable()
                .WithColumn("DAT_AVALIACAO").AsDate().NotNullable();

            Create.Table("PLANO")
                .WithColumn("COD_PLANO").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("DES_NOME").AsString(100).NotNullable()
                .WithColumn("IDF_TIPO").AsString(1).NotNullable()
                .WithColumn("IDF_AIVO").AsBoolean().NotNullable();

            Create.Table("AULA")
                .WithColumn("COD_AULA").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("DES_AULA").AsString(100).NotNullable()
                .WithColumn("IDF_TIPO_ATIVIDADE").AsBoolean().NotNullable()
                .WithColumn("IDF_ATIVO").AsBoolean().NotNullable();

            Create.Table("INSTRUTOR")
                .WithColumn("COD_INSTRUTOR").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("DES_NOME").AsString(100).NotNullable()
                .WithColumn("DES_RG").AsString(20).NotNullable()
                .WithColumn("DES_CPF").AsString(14).NotNullable()
                .WithColumn("IDF_TIPO_ATIVIDADE").AsBoolean().NotNullable()
                .WithColumn("IDF_ATIVO").AsBoolean().NotNullable();

            Create.Table("AULA_INSTRUTOR")
                .WithColumn("COD_AULA").AsInt32().NotNullable()
                    .PrimaryKey().ForeignKey("FK_AI_AUL", "AULA", "COD_AULA")
                .WithColumn("COD_INSTRUTOR").AsInt32().NotNullable()
                    .PrimaryKey().ForeignKey("FK_AI_INS", "INSTRUTOR", "COD_INSTRUTOR")
                .WithColumn("HOR_INICIO").AsString(5).NotNullable()
                .WithColumn("HOR_FIM").AsString(5).NotNullable()
                .WithColumn("IDF_SEGUNDA").AsBoolean().NotNullable()
                .WithColumn("IDF_TERCA").AsBoolean().NotNullable()
                .WithColumn("IDF_QUARTA").AsBoolean().NotNullable()
                .WithColumn("IDF_QUINTA").AsBoolean().NotNullable()
                .WithColumn("IDF_SEXTA").AsBoolean().NotNullable()
                .WithColumn("IDF_SABADO").AsBoolean().NotNullable()
                .WithColumn("IDF_DOMINGO").AsBoolean().NotNullable()
                .WithColumn("DES_SALA").AsString(100).NotNullable();

            Create.Table("PLANO_AULA")
                .WithColumn("COD_PLANO").AsInt32().NotNullable()
                    .PrimaryKey().ForeignKey("FK_PA_PLA", "PLANO", "COD_PLANO")
                .WithColumn("COD_AULA").AsInt32().NotNullable()
                    .PrimaryKey().ForeignKey("FK_PA_AUL", "AULA", "COD_AULA")
                .WithColumn("VLR_AULA").AsCurrency().NotNullable();

            Create.Table("CLIENTE_PLANO_AULA")
                .WithColumn("COD_PLANO").AsInt32().NotNullable()
                    .PrimaryKey().ForeignKey("FK_CPA_PLA", "PLANO", "COD_PLANO")
                .WithColumn("COD_AULA").AsInt32().NotNullable()
                    .PrimaryKey().ForeignKey("FK_CPA_AUL", "AULA", "COD_AULA")
                .WithColumn("COD_CLIENTE").AsInt32().NotNullable()
                    .PrimaryKey().ForeignKey("FK_CPA_CLI", "CLIENTE", "COD_CLIENTE");

            Create.Table("REGISTRO_AULA")
                .WithColumn("COD_REGISTRO").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("COD_PLANO").AsInt32().NotNullable()
                    .ForeignKey("FK_RA_PLA", "PLANO", "COD_PLANO")
                .WithColumn("COD_AULA").AsInt32().NotNullable()
                    .ForeignKey("FK_RA_AUL", "AULA", "COD_AULA")
                .WithColumn("COD_CLIENTE").AsInt32().NotNullable()
                    .ForeignKey("FK_RA_CLI", "CLIENTE", "COD_CLIENTE")
                .WithColumn("DAT_AULA").AsDateTime().NotNullable();

            Create.Table("FERIAS")
                .WithColumn("COD_FERIAS").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("COD_PLANO").AsInt32().NotNullable()
                    .ForeignKey("FK_FE_PLA", "PLANO", "COD_PLANO")
                .WithColumn("COD_AULA").AsInt32().NotNullable()
                    .ForeignKey("FK_FE_AUL", "AULA", "COD_AULA")
                .WithColumn("COD_CLIENTE").AsInt32().NotNullable()
                    .ForeignKey("FK_FE_CLI", "CLIENTE", "COD_CLIENTE")
                .WithColumn("DAT_INICIO").AsDateTime().NotNullable()
                .WithColumn("DAT_FIM").AsDateTime().NotNullable();

            Create.Table("PAGAMENTO")
                .WithColumn("COD_PAGAMENTO").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("COD_PLANO").AsInt32().NotNullable()
                    .ForeignKey("FK_PG_PLA", "PLANO", "COD_PLANO")
                .WithColumn("COD_AULA").AsInt32().NotNullable()
                    .ForeignKey("FK_PG_AUL", "AULA", "COD_AULA")
                .WithColumn("COD_CLIENTE").AsInt32().NotNullable()
                    .ForeignKey("FK_PG_CLI", "CLIENTE", "COD_CLIENTE")
                .WithColumn("DAT_VENCIMENTO").AsDateTime().NotNullable()
                .WithColumn("DAT_PAGAMENTO").AsDateTime().NotNullable()
                .WithColumn("VLR_PAGO").AsCurrency().NotNullable();
        }
    }
}